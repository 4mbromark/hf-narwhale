import { CommissionStatus, CommissionActionType } from 'hf-narwhale-common-module';
import { Column, Entity } from "typeorm";
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
    type: CommissionActionType;

    @Column({
        name: 'STATUS',
        type: 'varchar',
        length: 30,
        default: null
    })
    status: CommissionStatus;

    @Column({
        name: 'DESCRIPTION',
        type: 'varchar',
        length: 300,
        default: null
    })
    description: string;
}