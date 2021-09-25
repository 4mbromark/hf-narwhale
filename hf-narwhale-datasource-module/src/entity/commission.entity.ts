import { CommissionStatus } from 'hf-narwhale-common-module';
import { CommissionType } from 'hf-narwhale-common-module';
import { CreatorCommissionTemplate } from './creator-commission-template.entity';
import { Customer } from './customer.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Creator } from './creator.entity';
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_COMMISSION'
})
export class Commission extends HighFiveBaseEntity {

    @OneToOne(() => Creator)
    @JoinColumn({ name: "ID_CREATOR" })
    creator: Creator

    @OneToOne(() => Customer)
    @JoinColumn({ name: "ID_CUSTOMER" })
    customer: Creator

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
        name: 'DEADLINE',
        type: 'date',
        default: null
    })
    deadline: Date;

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
    priority: string;
}