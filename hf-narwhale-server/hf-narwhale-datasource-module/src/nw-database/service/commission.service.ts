import { Commission } from './../entity/commission.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { CommissionDao } from '../dao/commission.dao';
import { CommissionStatus } from '../../nw-namespace/commission-status.namespace';

@Injectable()
export class CommissionService extends HighFiveBaseService<Commission> {

    constructor(
        private commissionDao: CommissionDao
    ) {
        super(commissionDao)
    }

    public async getByIdCreator(idCreator: number): Promise<Commission[]> {
        return await this.commissionDao.getByIdCreator(idCreator);
    }

    public async updateStatusReturningCommission(id: number, currentStatus: CommissionStatus, status: CommissionStatus): Promise<Commission> {
        await this.commissionDao.updateStatus(id, currentStatus, status);
        return await this.getById(id);
    }
}