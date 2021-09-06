import { Customer } from './customer.entity';
import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { Creator } from './creator.entity';
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_CREATOR_PERSONAL_CUSTOMER_NOTE'
})
@Unique('CREATOR_PERSONAL_CUSTOMER_NOTE', ['idCreator', 'idCustomer'])
export class CreatorPersonalCustomerNote extends HighFiveBaseEntity {

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
        name: 'TEXT',
        type: 'varchar',
        length: 500,
        nullable: false
    })
    text: string;
}