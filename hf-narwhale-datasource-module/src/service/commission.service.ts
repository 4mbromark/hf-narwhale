import { Commission } from './../entity/commission.entity';
import { CreatorDao } from './../dao/creator.dao';
import { Creator } from './../entity/creator.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { CommissionDao } from '../dao/commission.dao';

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
}