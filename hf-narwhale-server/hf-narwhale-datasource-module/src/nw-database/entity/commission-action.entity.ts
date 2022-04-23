import { Column, Entity } from "typeorm";
import { CommissionStatus } from "../../nw-namespace/commission-status.namespace";
import { CommissionActionType, CommissionPriority } from "../../nw-namespace/commission.namespace";
import { UserDirection } from "../../nw-namespace/user.namespace";
import { Commissionable } from '../common/commissionable.entity';

@Entity({
    name: 'NW_COMMISSION_ACTION'
})
export class CommissionAction extends Commissionable {

    @Column({
        name: 'TYPE',
        type: 'varchar',
        length: 20,
        nullable: false
    })
    type: CommissionActionType;

    @Column({
        name: 'DETAIL',
        type: 'varchar',
        length: 30,
        default: null
    })
    detail: CommissionStatus | CommissionPriority | UserDirection;

    @Column({
        name: 'DESCRIPTION',
        type: 'varchar',
        length: 300,
        default: null
    })
    description: string;
}