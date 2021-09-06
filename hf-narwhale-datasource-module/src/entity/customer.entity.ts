import { HighFiveBaseEntity } from "hf-database-module";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user.entity";

@Entity({
    name: 'NW_CUSTOMER'
})
export class Customer extends HighFiveBaseEntity {

    @Column({
        name: 'ID_USER',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idUser: number;
}