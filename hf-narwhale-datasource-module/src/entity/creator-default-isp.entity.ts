import { InformationSharingPolicy } from './information-sharing-policy.entity';
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Creator } from './creator.entity';
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_CREATOR_DEFAULT_ISP'
})
export class CreatorDefaultInformationSharingPolicy extends HighFiveBaseEntity {

    @Column({
        name: 'ID_ISP',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idIsp: number;

    @Column({
        name: 'ID_CREATOR',
        type: 'bigint',
        unique: true,
        nullable: false
    })
    idCreator: number;
}