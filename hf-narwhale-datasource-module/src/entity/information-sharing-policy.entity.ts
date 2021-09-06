import { Column, Entity } from "typeorm";
import { HighFiveBaseEntity } from 'hf-database-module';

@Entity({
    name: 'NW_INFORMATION_SHARING_POLICY'
})
export class InformationSharingPolicy extends HighFiveBaseEntity {

    @Column({
        name: 'FIRST_NAME',
        type: 'bit',
        nullable: false,
        default: 0
    })
    firstName: boolean;

    @Column({
        name: 'LAST_NAME',
        type: 'bit',
        nullable: false,
        default: 0
    })
    lastName: boolean;

    @Column({
        name: 'BIRTH_DATE',
        type: 'bit',
        nullable: false,
        default: 0
    })
    birthDay: boolean;

    @Column({
        name: 'EMAIL_ADDRESS',
        type: 'bit',
        nullable: false,
        default: 0
    })
    emailAddress: boolean;

    @Column({
        name: 'PHONE_NUMBER',
        type: 'bit',
        nullable: false,
        default: 0
    })
    phoneNumber: boolean;

    @Column({
        name: 'PARTIAL_ADDRESS',
        type: 'bit',
        nullable: false,
        default: 0
    })
    partialAddress: boolean;

    @Column({
        name: 'FULL_ADDRESS',
        type: 'bit',
        nullable: false,
        default: 0
    })
    fullAddress: boolean;
}