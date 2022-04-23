import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommissionAction } from "../entity/commission-action.entity";
import { CommissionableDao } from "../common/commissionable.dao";

@Injectable()
export class CommissionActionDao extends CommissionableDao<CommissionAction> {

    constructor(
        @InjectRepository(CommissionAction) private commissionActionsRepository: Repository<CommissionAction>,
    ) {
        super(commissionActionsRepository);
    }
}