import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { MessageDao } from '../dao/message.dao';
import { Message } from '../entity/message.entity';

@Injectable()
export class MessageService extends HighFiveBaseService<Message> {

    constructor(
        private messageDao: MessageDao
    ) {
        super(messageDao)
    }

    public async getByIdUser(idUser: number): Promise<Message[]> {
        return await this.messageDao.getByIdUser(idUser);
    }
}