import { HighFiveBaseEntity } from "hf-database-module";
import { Column, Entity } from "typeorm";

@Entity({
    name: 'NW_USER'
})
export class User extends HighFiveBaseEntity {

    @Column({
        name: 'ID_REGISTRY',
        type: 'bigint',
        nullable: false
    })
    idRegistry: number;

    @Column({
        name: 'BLOCKED',
        type: 'bit',
        nullable: false,
        default: 0
    })
    blocked: boolean;
}