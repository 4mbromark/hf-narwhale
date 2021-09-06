import { HighFiveBaseEntity } from "hf-database-module";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity({
    name: 'NW_CREATOR'
})
export class Creator extends HighFiveBaseEntity {

    @Column({
        name: 'ID_USER',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idUser: number;
}