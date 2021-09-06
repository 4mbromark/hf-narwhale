import { HighFiveBaseEntity } from "hf-database-module";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Commission } from './commission.entity';

@Entity({
    name: 'NW_COMMISSION_PAYMENT_DETAIL'
})
export class CommissionPaymentDetail extends HighFiveBaseEntity {

    @Column({
        name: 'ID_COMMISSION',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idCommission: number;

    @Column({
        name: 'METHOD',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    method: string;

    @Column({
        name: 'BUDGET',
        type: 'varchar',
        length: 300,
        default: null
    })
    description: string;
}