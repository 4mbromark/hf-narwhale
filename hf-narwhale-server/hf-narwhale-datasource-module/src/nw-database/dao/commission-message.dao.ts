import { CommissionMessage } from './../entity/commission-message.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommissionableDao } from '../common/commissionable.dao';

@Injectable()
export class CommissionMessageDao extends CommissionableDao<CommissionMessage> {

    constructor(
        @InjectRepository(CommissionMessage) private commissionMessagesRepository: Repository<CommissionMessage>,
    ) {
        super(commissionMessagesRepository);
    }
}