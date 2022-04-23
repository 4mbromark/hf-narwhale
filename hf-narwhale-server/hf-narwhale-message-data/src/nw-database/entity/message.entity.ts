import { Column, Entity } from "typeorm";
import { HighFiveBaseEntity } from 'hf-database-module';
import { MessageSender, MessageTemplate } from "../../nw-namespace/message.namespace";

@Entity({
    name: 'NW_MESSAGE'
})
export class Message extends HighFiveBaseEntity {

    @Column({
        name: 'ID_USER',
        type: 'varchar',
        default: null
    })
    idUser?: number;

    @Column({
        name: 'SENDER',
        type: 'varchar',
        length: 30,
        nullable: false
    })
    sender: MessageSender;

    @Column({
        name: 'TEMPLATE',
        type: 'varchar',
        length: 40,
        nullable: false
    })
    template: MessageTemplate;

    @Column({
        name: 'CONTENT',
        type: 'json',
        default: null
    })
    content?: any;
}