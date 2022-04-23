import { Customer } from './customer.entity';
import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { Creator } from './creator.entity';
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_CREATOR_BLOCKED_CUSTOMER'
})
@Unique('CREATOR_BLOCKED_CUSTOMER', ['idCreator', 'idCustomer'])
export class CreatorBlockedCustomer extends HighFiveBaseEntity {

    @Column({
        name: 'ID_CREATOR',
        type: 'bigint',
        nullable: false
    })
    idCreator: number;

    @Column({
        name: 'ID_CUSTOMER',
        type: 'bigint',
        nullable: false
    })
    idCustomer: number;

    @Column({
        name: 'REASON',
        type: 'varchar',
        length: 500,
        nullable: false
    })
    reason: string;
}