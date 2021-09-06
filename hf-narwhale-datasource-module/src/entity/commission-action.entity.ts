import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Commission } from './commission.entity';
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_COMMISSION_ACTION'
})
export class CommissionAction extends HighFiveBaseEntity {

    @Column({
        name: 'ID_COMMISSION',
        type: 'bigint',
        nullable: false
    })
    idCommission: number;

    @Column({
        name: 'TYPE',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    type: string;

    @Column({
        name: 'DESCRIPTION',
        type: 'varchar',
        length: 300,
        default: null
    })
    description: string;
}