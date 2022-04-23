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

    @OneToOne(() => InformationSharingPolicy)
    @JoinColumn({ name: "ID_ISP" })
    isp: InformationSharingPolicy

    @Column({
        name: 'ID_ISP',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idIsp: number;

    @Column({
        name: 'ID_CUSTOMER',
        type: 'bigint',
        nullable: false
    })
    idCustomer: number;

    @Column({
        name: 'ID_CREATOR',
        type: 'bigint',
        nullable: false
    })
    idCreator: number;
}