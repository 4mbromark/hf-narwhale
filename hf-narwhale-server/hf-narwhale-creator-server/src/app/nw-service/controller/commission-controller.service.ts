import { CustomerCollectiveService } from './../collective/customer-collective.service';
import { CommissionActionCollectiveService } from './../collective/commission-action-collective.service';
import { BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { Commission, CommissionActionType, CommissionPriority, CommissionService, CommissionStatus, CommissionType, getCommissionStatusPreviousesByStatusAndType } from "hf-narwhale-datasource-module";

@Injectable()
export class CommissionControllerService {

    constructor(
        private commissionService: CommissionService,
        private customerCollectiveService: CustomerCollectiveService,
        // private commissionOrderCollectiveService: CommissionOrderCollectiveService,
        private commissionActionCollectiveService: CommissionActionCollectiveService
    ) { }

    public async getWithFilters(idCreator: number, tk: string): Promise<Commission[]> {
        const commissionList = await this.commissionService.getByIdCreator(idCreator);

        await Promise.all(
            commissionList.filter((commission: Commission) => {
                return commission.idCustomer !== null;
            }).map(async (commission: Commission) => {
                commission.customerData = await this.customerCollectiveService.getUserByIdCustomerAndIsp(commission.idCustomer, idCreator, tk);
            })
        );

        return commissionList;
    }

    public async insert(idCreator: number, type: CommissionType, title: string, description: string): Promise<Commission> {
        const commission = new Commission();
        commission.idCreator = idCreator;
        commission.type = type;
        commission.title = title;
        commission.description = description;
        commission.status = CommissionStatus.ADDED;

        const insertedCommission = await this.commissionService.insertReturningEntity(commission);
        const idCommission = commission.id;

        await this.commissionActionCollectiveService.insertAction(idCommission, CommissionActionType.STATUS, CommissionStatus.ADDED);

        return insertedCommission;
    }

    public async updateStatus(id: number, status: CommissionStatus): Promise<Commission> {
        const commission = await this.commissionService.getById(id);

        if (commission) {
            const previouses = getCommissionStatusPreviousesByStatusAndType(status, commission.type);
            const currentStatus = commission.status;

            if (previouses.includes(currentStatus)) {
             /* if (Object.values(CommissionOrderStatus).includes(status as unknown as CommissionOrderStatus)) {
                    await this.commissionOrderCollectiveService.updateStatus(id, status as unknown as CommissionOrderStatus);
                } */
    
                const updatedCommission = await this.commissionService.updateStatusReturningCommission(id, commission.status, status)
    
                await this.commissionActionCollectiveService.insertAction(id, CommissionActionType.STATUS, status);
    
                console.log(updatedCommission);
                return updatedCommission
            }
            
            throw new BadRequestException('commission cannote be updated to status = ' + status);            
        }

        throw new BadRequestException('commission not found for id = ' + id);
    }

    public async updatePriority(id: number, priority: CommissionPriority): Promise<Commission> {
        const commission = await this.commissionService.getById(id);

        if (commission) {
            commission.priority = priority;

            const updatedCommission = await this.commissionService.updateReturningEntity(commission);

            await this.commissionActionCollectiveService.insertAction(id, CommissionActionType.PRIORITY, priority);

            return updatedCommission
        }

        throw new BadRequestException('commission not found for id = ' + id);
    }
}