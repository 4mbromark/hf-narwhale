import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HighFiveBaseDao } from 'hf-database-module';
import { Message } from "../entity/message.entity";

@Injectable()
export class MessageDao extends HighFiveBaseDao<Message> {

    constructor(
        @InjectRepository(Message) private messagesRepository: Repository<Message>,
    ) {
        super(messagesRepository);
    }

    public async getByIdUser(idUser: number): Promise<Message[]> {
        const messageList = this.messagesRepository.createQueryBuilder('message')
        .leftJoinAndSelect("message.user", "user")
        .where("message.idUser = :idUser", { idUser: idUser })
        .getMany();

        return messageList;
    }

    public async getByMessageTraceTypeAndMessageTraceStatus(idUser: number): Promise<Message[]> {
        const messageList = this.messagesRepository.createQueryBuilder('message')
        .leftJoinAndSelect("message.user", "user")
        .where("message.idUser = :idUser", { idUser: idUser })
        .getMany();

        return messageList;
    }
}