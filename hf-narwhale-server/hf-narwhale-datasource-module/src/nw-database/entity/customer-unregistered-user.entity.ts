import { Customer } from './customer.entity';
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_CUSTOMER_UNREGISTERED_USER'
})
export class CustomerUnregisteredUser extends HighFiveBaseEntity {

    @Column({
        name: 'ID_CUSTOMER',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idCustomer: number;

    @Column({
        name: 'EMAIL_ADDRESS',
        type: 'varchar',
        length: 256,
        unique: true,
        nullable: false
    })
    emailAddress: string;
}