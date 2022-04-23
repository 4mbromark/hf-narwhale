import { Creator } from './creator.entity';
import { HighFiveBaseEntity } from "hf-database-module";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity({
    name: 'NW_USER'
})
export class User extends HighFiveBaseEntity {

    @Column({
        name: 'ID_REGISTRY',
        type: 'bigint',
        default: false
    })
    idRegistry: number;

    @Column({
        name: 'BLOCKED',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    blocked: boolean;
}