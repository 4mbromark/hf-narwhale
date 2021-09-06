import { InformationSharingPolicy } from './information-sharing-policy.entity';
import { Customer } from './customer.entity';
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_CUSTOMER_DEFAULT_ISP'
})
export class CustomerDefaultInformationSharingPolicy extends HighFiveBaseEntity {

    @Column({
        name: 'ID_ISP',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idIsp: number;

    @OneToOne(() => Customer, (Customer) => Customer.id)
    @JoinColumn({
        name: 'ID_CUSTOMER'
    })
    @Column({
        name: 'ID_CUSTOMER',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idCreator: number;
}