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
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    firstName: boolean;

    @Column({
        name: 'LAST_NAME',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    lastName: boolean;

    @Column({
        name: 'BIRTH_DATE',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    birthDate: boolean;

    @Column({
        name: 'EMAIL_ADDRESS',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    emailAddress: boolean;

    @Column({
        name: 'PHONE_NUMBER',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    phoneNumber: boolean;

    @Column({
        name: 'PARTIAL_ADDRESS',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    partialAddress: boolean;

    @Column({
        name: 'FULL_ADDRESS',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    fullAddress: boolean;
}