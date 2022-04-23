import { MessageTrace } from '../entity/message-trace.entity';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';
import { MessageStatus, MessageType } from '../../nw-namespace/message.namespace';

@Injectable()
export class MessageTraceDao extends HighFiveBaseDao<MessageTrace> {

    constructor(
        @InjectRepository(MessageTrace) private messageTracesRepository: Repository<MessageTrace>,
    ) {
        super(messageTracesRepository);
    }

    public async getByIdMessage(idMessage: number): Promise<MessageTrace[]> {
        const messageTraceList = this.messageTracesRepository.createQueryBuilder('messageTrace')
        .leftJoinAndSelect("messageTrace.message", "message")
        .leftJoinAndSelect("message.user", "user")
        .where("messageTrace.idMessage = :idMessage", { idMessage: idMessage })
        .getMany();

        return messageTraceList;
    }

    public async getByStatus(status: MessageStatus): Promise<MessageTrace[]> {
        const messageTraceList = this.messageTracesRepository.createQueryBuilder('messageTrace')
        .leftJoinAndSelect("messageTrace.message", "message")
        .leftJoinAndSelect("message.user", "user")
        .where("messageTrace.status = :status", { status: status })
        .getMany();

        return messageTraceList;
    }

    public async getByTypeAndStatus(type: MessageType, status: MessageStatus): Promise<MessageTrace[]> {
        const messageTraceList = this.messageTracesRepository.createQueryBuilder('messageTrace')
        .leftJoinAndSelect("messageTrace.message", "message")
        .leftJoinAndSelect("message.user", "user")
        .where("messageTrace.type = :type AND messageTrace.status = :status", { type: type, status: status })
        .getMany();

        return messageTraceList;
    }

    public async getByTypeStatusAndScheduledLessEqualThan(type: MessageType, status: MessageStatus, scheduled: Date): Promise<MessageTrace[]> {
        const messageTraceList = this.messageTracesRepository.createQueryBuilder('messageTrace')
        .leftJoinAndSelect("messageTrace.message", "message")
        .leftJoinAndSelect("message.user", "user")
        .where("messageTrace.type = :type AND messageTrace.status = :status AND messageTrace.scheduled <= :scheduled", { type: type, status: status, scheduled: scheduled })
        .getMany();

        return messageTraceList;
    }

    public async getByTypeStatusAndSent(type: MessageType, status: MessageStatus, scheduled: Date): Promise<MessageTrace[]> {
        const messageTraceList = this.messageTracesRepository.createQueryBuilder('messageTrace')
        .leftJoinAndSelect("messageTrace.message", "message")
        .leftJoinAndSelect("message.user", "user")
        .where("messageTrace.type = :type AND messageTrace.status = :status AND messageTrace.scheduled <= :scheduled", { type: type, status: status, scheduled: scheduled })
        .getMany();

        return messageTraceList;
    }

    public async updateStatus(id: number, currentStatus: MessageStatus, status: MessageStatus): Promise<void> {
        this.messageTracesRepository.createQueryBuilder('messageTrace')
        .update(MessageTrace)
        .set({ status: status })
        .where("id = :id AND status = :status", { id: id, status: currentStatus })
        .execute();
    }

    public async updateStatusScheduled(id: number, currentStatus: MessageStatus, status: MessageStatus, scheduled: Date): Promise<void> {
        this.messageTracesRepository.createQueryBuilder('messageTrace')
        .update(MessageTrace)
        .set({ status: status, scheduled: scheduled })
        .where("id = :id AND status = :status AND scheduled is null AND sent is null", { id: id, status: currentStatus })
        .execute();
    }

    public async updateStatusSent(id: number, currentStatus: MessageStatus, status: MessageStatus, detail: string, sent: Date, identifier: string): Promise<void> {
        this.messageTracesRepository.createQueryBuilder('messageTrace')
        .update(MessageTrace)
        .set({ status: status, detail: detail, sent: sent, identifier: identifier })
        .where("id = :id AND status = :status AND detail is null AND scheduled is not null AND sent is null AND identifier is null", { id: id, status: currentStatus })
        .execute();
    }
}