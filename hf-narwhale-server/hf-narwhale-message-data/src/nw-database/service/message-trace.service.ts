import { MessageTraceDao } from '../dao/message-trace.dao';
import { MessageTrace } from '../entity/message-trace.entity';
import { Injectable } from '@nestjs/common';
import { HighFiveBaseService } from 'hf-database-module';
import { MessageStatus, MessageType } from '../../nw-namespace/message.namespace';

@Injectable()
export class MessageTraceService extends HighFiveBaseService<MessageTrace> {

    constructor(
        private messageTraceDao: MessageTraceDao
    ) {
        super(messageTraceDao)
    }

    public async getByIdMessage(idMessage: number): Promise<MessageTrace[]> {
        return await this.messageTraceDao.getByIdMessage(idMessage);
    }

    public async getByStatus(status: MessageStatus): Promise<MessageTrace[]> {
        return await this.messageTraceDao.getByStatus(status);
    }

    public async getByTypeAndStatus(type: MessageType, status: MessageStatus): Promise<MessageTrace[]> {
        return await this.messageTraceDao.getByTypeAndStatus(type, status);
    }

    public async getByTypeStatusAndScheduledLessEqualThan(type: MessageType, status: MessageStatus, scheduled: Date): Promise<MessageTrace[]> {
        return await this.messageTraceDao.getByTypeStatusAndScheduledLessEqualThan(type, status, scheduled);
    }

    public async getByTypeStatusAndSent(type: MessageType, status: MessageStatus, sent: Date): Promise<MessageTrace[]> {
        return await this.messageTraceDao.getByTypeStatusAndSent(type, status, sent);
    }

    public async updateStatusReturningMessageTrace(id: number, currentStatus: MessageStatus, status: MessageStatus): Promise<MessageTrace> {
        await this.messageTraceDao.updateStatus(id, currentStatus, status);
        return await this.getById(id);
    }

    public async updateStatusScheduledReturningMessageTrace(id: number, scheduled: Date): Promise<MessageTrace> {
        const currentStatus: MessageStatus = MessageStatus.CHECKING;
        const status: MessageStatus = MessageStatus.READY;
        
        await this.messageTraceDao.updateStatusScheduled(id, currentStatus, status, scheduled);
        return await this.getById(id);
    }

    public async updateStatusSentReturningMessageTrace(id: number, status: MessageStatus, detail: string, sent: Date, identifier: string): Promise<MessageTrace> {
        const currentStatus: MessageStatus = MessageStatus.SENDING;
        
        await this.messageTraceDao.updateStatusSent(id, currentStatus, status, detail, sent, identifier);
        return await this.getById(id);
    }
}