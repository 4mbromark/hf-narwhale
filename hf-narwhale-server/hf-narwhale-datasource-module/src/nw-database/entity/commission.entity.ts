import { HighFiveUser } from 'hf-ds-module';
import { CreatorCommissionTemplate } from './creator-commission-template.entity';
import { Customer } from './customer.entity';
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Creator } from './creator.entity';
import { HighFiveBaseEntity } from 'hf-database-module';
import { CustomerUnregisteredUser } from './customer-unregistered-user.entity';
import { CommissionPriority, CommissionType } from '../../nw-namespace/commission.namespace';
import { CommissionStatus } from '../../nw-namespace/commission-status.namespace';

@Entity({
    name: 'NW_COMMISSION'
})
export class Commission extends HighFiveBaseEntity {

    @OneToOne(() => Creator)
    @JoinColumn({ name: "ID_CREATOR" })
    creator: Creator

    @OneToOne(() => Customer)
    @JoinColumn({ name: "ID_CUSTOMER" })
    customer: Customer
    customerData: HighFiveUser | CustomerUnregisteredUser;

    @OneToOne(() => CreatorCommissionTemplate)
    @JoinColumn({ name: "ID_TEMPLATE" })
    template: CreatorCommissionTemplate

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
        name: 'ID_TEMPLATE',
        type: 'bigint',
        nullable: false
    })
    idTemplate: number;

    @Column({
        name: 'TYPE',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    type: CommissionType;

    @Column({
        name: 'TITLE',
        type: 'varchar',
        length: 200,
        nullable: false
    })
    title: string;

    @Column({
        name: 'DESCRIPTION',
        type: 'varchar',
        length: 1000,
        nullable: false
    })
    description: string;

    @Column({
        name: 'STATUS',
        type: 'varchar',
        length: 30,
        nullable: false
    })
    status: CommissionStatus;

    @Column({
        name: 'PRIORITY',
        type: 'varchar',
        length: 20,
        default: null
    })
    priority: CommissionPriority;
}