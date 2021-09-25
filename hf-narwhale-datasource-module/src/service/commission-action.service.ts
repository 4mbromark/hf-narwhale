import { Commission } from './../entity/commission.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { CommissionAction } from '..';
import { CommissionActionDao } from '../dao/commission-action.dao.';

@Injectable()
export class CommissionActionService extends HighFiveBaseService<CommissionAction> {

    constructor(
        private commissionActionDao: CommissionActionDao
    ) {
        super(commissionActionDao)
    }

    public async getByIdCommission(idCommission: number): Promise<CommissionAction[]> {
        return await this.commissionActionDao.getByIdCommission(idCommission);
    }
}