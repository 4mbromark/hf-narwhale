import { Column, Entity } from "typeorm";
import { UserDirection } from "../../nw-namespace/user.namespace";
import { Commissionable } from "../common/commissionable.entity";

@Entity({
    name: 'NW_COMMISSION_MESSAGE'
})
export class CommissionMessage extends Commissionable {

    @Column({
        name: 'TEXT',
        type: 'text',
        nullable: false
    })
    text: string;

    @Column({
        name: 'DIRECTION',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    direction: UserDirection;

    @Column({
        name: 'READED',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    readed: boolean;
}