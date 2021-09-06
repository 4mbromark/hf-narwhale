import { Commission } from 'src/app/nw-object/nw/commission';
import { Button } from '../../../nw-object/button/button';

export class CommissionTypeButton extends Button {

}

export enum CommissionType {
  PERSONAL = 'PERSONAL',
  PRE_AGREED = 'PRE_AGREED'
}

export const COMMISSION_TYPE_LIST: CommissionTypeButton[] = [
  { type: 'main', title: 'Autocommissione', icon: 'reply', tag: CommissionType.PERSONAL },
  { type: 'main', title: 'Preconcordata', icon: 'handshake', tag: CommissionType.PRE_AGREED }
];

export class CreateCommissionData {
  type: CommissionType;
  commission: Commission;
}

export enum CreateCommissionStep {
  TYPE,
  COMMISSION,
  STATUS
}
