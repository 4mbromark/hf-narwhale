import { CommissionMessageDao } from './../dao/commission-message.dao';
import { CommissionMessage } from './../entity/commission-message.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { CommissionableService } from '../common/commissionable.service';

@Injectable()
export class CommissionMessageService extends CommissionableService<CommissionMessage> {

    constructor(
        private commissionMessageDao: CommissionMessageDao
    ) {
        super(commissionMessageDao)
    }
}