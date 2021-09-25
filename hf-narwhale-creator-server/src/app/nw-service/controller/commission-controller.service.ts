import { Injectable } from "@nestjs/common";
import { CommissionActionType, CommissionStatus, CommissionType } from "hf-narwhale-common-module";
import { Commission, CommissionAction, CommissionActionService, CommissionService, User } from "hf-narwhale-datasource-module";

@Injectable()
export class CommissionControllerService {

    constructor(
        private commissionService: CommissionService,
        private commissionActionService: CommissionActionService
    ) {}

    public async getWithFilters(idCreator: number): Promise<Commission[]> {
        const commissionList = await this.commissionService.getByIdCreator(idCreator);
        return commissionList;
    }

    public async insertCommissionData(idCreator: number, type: CommissionType, commission: Commission, status: CommissionStatus): Promise<number> {
        commission.idCreator = idCreator;
        commission.type = type;
        commission.status = status;
        const idCommission = await this.commissionService.insertReturningId(commission);

        await this.insertAction(idCommission, CommissionActionType.STATUS, CommissionStatus.ADDED);

        switch (status) {
            case CommissionStatus.IN_EVALUATION: {
                await this.insertAction(idCommission, CommissionActionType.STATUS, CommissionStatus.WAITING_FOR_EVALUATION);
                break;
            };
            case CommissionStatus.IN_PROGRESS:
            case CommissionStatus.SUSPENDED:
            case CommissionStatus.ACCEPTED:
            case CommissionStatus.REFUSED:
            case CommissionStatus.REFUSED_BY_CUSTOMER: {
                await this.insertAction(idCommission, CommissionActionType.STATUS, CommissionStatus.WAITING_FOR_EVALUATION);
                await this.insertAction(idCommission, CommissionActionType.STATUS, CommissionStatus.IN_EVALUATION);
                break;
            };
        } 

        await this.insertAction(idCommission, CommissionActionType.STATUS, status);

        return idCommission;
    }

    private async insertAction(idCommission: number, type: CommissionActionType, status?: CommissionStatus, description?: string): Promise<void> {
        const action: CommissionAction = new CommissionAction();
        action.idCommission = idCommission;
        action.type = type;
        action.status = status || null;
        action.description = description || null;

        await this.commissionActionService.insert(action);
    }
}