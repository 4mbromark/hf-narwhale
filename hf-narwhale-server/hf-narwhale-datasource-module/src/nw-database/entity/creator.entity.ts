import { HighFiveBaseEntity } from "hf-database-module";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user.entity";

@Entity({
    name: 'NW_CREATOR'
})
export class Creator extends HighFiveBaseEntity {

    @OneToOne(() => User)
    @JoinColumn({ name: "ID_USER" })
    user: User

    @Column({
        name: 'ID_USER',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idUser: number;
}