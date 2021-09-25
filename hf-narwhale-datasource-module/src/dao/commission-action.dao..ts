import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';
import { CommissionAction } from "../entity/commission-action.entity";

@Injectable()
export class CommissionActionDao extends HighFiveBaseDao<CommissionAction> {

    constructor(
        @InjectRepository(CommissionAction) private commissionActionsRepository: Repository<CommissionAction>,
    ) {
        super(commissionActionsRepository);
    }

    public async getByIdCommission(idCommission: number): Promise<CommissionAction[]> {
        const commissionActionList = this.commissionActionsRepository.createQueryBuilder('commissionAction')
        .where('commissionAction.idCommission = :idCommission', { idCommission: idCommission })
        .orderBy('commissionAction.id', 'DESC')
        .getMany();

        return commissionActionList;
    }
}