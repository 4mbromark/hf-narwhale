import { Column, Entity } from "typeorm";
import { UserDirection } from "../../nw-namespace/user.namespace";
import { Commissionable } from '../common/commissionable.entity';

@Entity({
    name: 'NW_COMMISSION_ORDER'
})
export class CommissionOrder extends Commissionable {

    @Column({
        name: 'DEADLINE',
        type: 'date',
        default: null
    })
    deadline: Date;

    @Column({
        name: 'PAYMENT',
        type: 'varchar',
        length: 10,
        default: null
    })
    payment: string;

    @Column({
        name: 'PAYMENT_ADVANCE',
        type: 'varchar',
        length: 10,
        default: null
    })
    paymentAdvance: string;

    @Column({
        name: 'DIRECTION',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    direction: UserDirection;
}