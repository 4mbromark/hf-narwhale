import { Column, Entity } from "typeorm";
import { UserDirection } from "../../nw-namespace/user.namespace";
import { Commissionable } from "../common/commissionable.entity";

@Entity({
    name: 'NW_COMMISSION_RESOURCE'
})
export class CommissionResource extends Commissionable {

    @Column({
        name: 'NAME',
        type: 'varchar',
        length: 200,
        nullable: false
    })
    name: string;

    @Column({
        name: 'LINK',
        type: 'varchar',
        length: 5000,
        nullable: false
    })
    link: string;

    @Column({
        name: 'DIRECTION',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    direction: UserDirection;

    @Column({
        name: 'PRIVATE',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    private: boolean;

    @Column({
        name: 'REFERENCE',
        type: 'bit',
        nullable: false,
        default: 0,
        transformer: { from: (v: Buffer) => v ? !!v.readInt8(0) : null, to: (v) => v }
    })
    reference: boolean;
}