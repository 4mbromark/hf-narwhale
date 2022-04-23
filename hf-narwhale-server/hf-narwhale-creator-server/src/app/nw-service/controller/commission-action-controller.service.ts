import { Injectable } from "@nestjs/common";
import { CommissionAction, CommissionActionService } from "hf-narwhale-datasource-module";

@Injectable()
export class CommissionActionControllerService {

    constructor(
        private commissionActionService: CommissionActionService
    ) {}

    public async getByIdCommission(idCommission: number): Promise<CommissionAction[]> {
        const commissionActionList = await this.commissionActionService.getByIdCommission(idCommission);
        return commissionActionList;
    }
}