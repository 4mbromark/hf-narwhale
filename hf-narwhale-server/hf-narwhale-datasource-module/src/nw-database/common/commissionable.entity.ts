import { Column } from "typeorm";
import { HighFiveBaseEntity } from 'hf-database-module';

export abstract class Commissionable extends HighFiveBaseEntity {

    @Column({
        name: 'ID_COMMISSION',
        type: 'bigint',
        nullable: false
    })
    idCommission: number;
}