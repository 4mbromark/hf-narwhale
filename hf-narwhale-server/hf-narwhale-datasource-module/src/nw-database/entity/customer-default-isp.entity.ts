import { InformationSharingPolicy } from './information-sharing-policy.entity';
import { Customer } from './customer.entity';
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_CUSTOMER_DEFAULT_ISP'
})
export class CustomerDefaultInformationSharingPolicy extends HighFiveBaseEntity {

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
        unique: true,
        nullable: false
    })
    idCustomer: number;
}