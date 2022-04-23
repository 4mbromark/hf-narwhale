import { CommissionActionCollectiveService } from './../collective/commission-action-collective.service';
import { Injectable } from "@nestjs/common";
import { CommissionActionType, CommissionOrder, CommissionOrderService, CommissionType, UserDirection } from "hf-narwhale-datasource-module";
import { CommissionService } from "hf-narwhale-datasource-module";

@Injectable()
export class CommissionOrderControllerService {

    constructor(
        private commissionService: CommissionService,
        private commissionOrderService: CommissionOrderService,
        private commissionActionCollectiveService: CommissionActionCollectiveService
    ) {}

    public async getByIdCommission(idCommission: number): Promise<CommissionOrder[]> {
        const commissionResourceList = await this.commissionOrderService.getByIdCommission(idCommission);
        return commissionResourceList;
    }

    public async insert(idCommission: number, deadline: Date, payment: string, paymentAdvance: string): Promise<CommissionOrder> {
        const commissionOrder = new CommissionOrder();
        commissionOrder.idCommission = idCommission;
        commissionOrder.deadline = new Date(deadline);
        commissionOrder.payment = payment;
        commissionOrder.paymentAdvance = paymentAdvance;

        const commission = await this.commissionService.getById(idCommission);

        let direction: UserDirection;
        
        switch (commission.type) {
            case CommissionType.PRE_AGREED: {
                direction = UserDirection.CREATOR_TO_CUSTOMER;
                break;
            }
            case CommissionType.MANUAL: {
                direction = UserDirection.CREATOR_TO_CREATOR;
                break;
            }
        }
        commissionOrder.direction = direction;

        const insertedCommissionOrder = await this.commissionOrderService.insertReturningEntity(commissionOrder);

        await this.commissionActionCollectiveService.insertAction(idCommission, CommissionActionType.ORDER, direction);

        return insertedCommissionOrder;
    }
}