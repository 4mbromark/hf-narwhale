import { CommissionAction, CommissionActionService, CommissionActionType, CommissionPriority, CommissionStatus, UserDirection } from 'hf-narwhale-datasource-module';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommissionActionCollectiveService {

    constructor(
        private commissionActionService: CommissionActionService
    ) {}

    public async insertAction(idCommission: number, type: CommissionActionType, detail?: CommissionStatus | CommissionPriority | UserDirection, description?: string): Promise<void> {
        const action: CommissionAction = new CommissionAction();
        action.idCommission = idCommission;
        action.type = type;
        action.detail = detail || null;
        action.description = description || null;

        await this.commissionActionService.insert(action);
    }
}