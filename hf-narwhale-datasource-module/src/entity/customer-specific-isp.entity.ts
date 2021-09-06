import { InformationSharingPolicy } from './information-sharing-policy.entity';
import { Customer } from './customer.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, Unique } from "typeorm";
import { Creator } from './creator.entity';
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_CUSTOMER_SPECIFIC_ISP'
})
@Unique('CUSTOMER_CUSTOM_ISP', ['idCustomer', 'idCreator'])
export class CustomerSpecificInformationSharingPolicy extends HighFiveBaseEntity {

    @Column({
        name: 'ID_ISP',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idIsp: number;

    @ManyToOne(() => Customer, (Customer) => Customer.id)
    @JoinColumn({
        name: 'ID_CUSTOMER'
    })
    @Column({
        name: 'ID_CUSTOMER',
        type: 'bigint',
        nullable: false
    })
    idCustomer: number;

    @ManyToOne(() => Creator, (Creator) => Creator.id)
    @JoinColumn({
        name: 'ID_CREATOR'
    })
    @Column({
        name: 'ID_CREATOR',
        type: 'bigint',
        nullable: false
    })
    idCreator: number;
}