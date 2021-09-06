import { HighFiveBaseEntity } from "hf-database-module";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Creator } from './creator.entity';

@Entity({
    name: 'NW_CREATOR_SHOWCASE'
})
export class CreatorShowcase extends HighFiveBaseEntity {

    @Column({
        name: 'ID_CREATOR',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idCreator: number;

    @Column({
        name: 'CAPTION',
        type: 'varchar',
        length: 200,
        nullable: false
    })
    caption: string;

    @Column({
        name: 'TEXT',
        type: 'varchar',
        length: 1000,
        default: null
    })
    text: string;
}