import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { HighFiveBaseEntity } from 'hf-database-module';
import { Message } from "./message.entity";
import { MessageStatus } from "../../nw-namespace/message.namespace";

@Entity({
    name: 'NW_MESSAGE_TRACE'
})
export class MessageTrace extends HighFiveBaseEntity {

    @ManyToOne(() => Message)
    @JoinColumn({ name: "ID_MESSAGE" })
    message: Message

    @Column({
        name: 'ID_MESSAGE',
        type: 'varchar',
        nullable: false
    })
    idMessage: number;

    @Column({
        name: 'TYPE',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    type: string;

    @Column({
        name: 'TO',
        type: 'varchar',
        length: 256,
        nullable: false
    })
    to: string;

    @Column({
        name: 'STATUS',
        type: 'varchar',
        length: 30,
        default: null
    })
    status: MessageStatus;

    @Column({
        name: 'DETAIL',
        type: 'varchar',
        length: 1000,
        default: null
    })
    detail: string;

    @Column({
        name: 'ATTEMPT',
        type: 'int',
        nullable: false,
        default: 1
    })
    attempt: string;

    @Column({
        name: 'SCHEDULED',
        type: 'timestamp',
        default: null
    })
    scheduled: Date;

    @Column({
        name: 'SENT',
        type: 'timestamp',
        default: null
    })
    sent: Date;

    @Column({
        name: 'IDENTIFIER',
        type: 'varchar',
        length: 200,
        default: null
    })
    identifier: string;
}