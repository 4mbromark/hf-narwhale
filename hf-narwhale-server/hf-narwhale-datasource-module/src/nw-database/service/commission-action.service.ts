import { Injectable } from '@nestjs/common';
import { CommissionActionDao } from '../dao/commission-action.dao.';
import { CommissionableService } from '../common/commissionable.service';
import { CommissionAction } from '../entity/commission-action.entity';

@Injectable()
export class CommissionActionService extends CommissionableService<CommissionAction> {

    constructor(
        private commissionActionDao: CommissionActionDao
    ) {
        super(commissionActionDao)
    }
}