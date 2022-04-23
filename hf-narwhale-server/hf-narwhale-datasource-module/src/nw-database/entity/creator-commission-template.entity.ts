import { HighFiveBaseEntity } from "hf-database-module";
import { Column, Entity, JoinColumn, ManyToOne, Unique } from "typeorm";
import { Creator } from './creator.entity';

@Entity({
    name: 'NW_CREATOR_COMMISSION_TEMPLATE'
})
@Unique('CREATOR_COMMISSION_TEMPLATE', ['idCreator', 'title'])
export class CreatorCommissionTemplate extends HighFiveBaseEntity {

    @Column({
        name: 'ID_CREATOR',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idCreator: number;

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
        length: 500,
        default: null
    })
    description: string;

    @Column({
        name: 'ICON',
        type: 'varchar',
        length: 20,
        default: null
    })
    icon: string;

    @Column({
        name: 'ICON_COLOR',
        type: 'varchar',
        length: 20,
        default: null
    })
    iconColor: string;
}