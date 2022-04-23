import { Column, Entity } from "typeorm";
import { Commissionable } from '../common/commissionable.entity';

@Entity({
    name: 'NW_COMMISSION_ANNOTATION'
})
export class CommissionAnnotation extends Commissionable {

    @Column({
        name: 'TEXT',
        type: 'text',
        nullable: false
    })
    text: string;
}