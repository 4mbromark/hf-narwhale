import { CommissionStatus, getCommissionStatusDetail, CommissionStatusDetail } from 'src/app/nw-object/commission/commission-status';
// tslint:disable: max-line-length
import { LanguageLabel } from 'src/app/nw-language/language-label';
import { Commission } from 'src/app/nw-object/nw/commission';
import { Button } from '../../../nw-object/button/button';

export class CommissionTypeButton extends Button {

}

export class CommissionStatusButton extends Button {
  commissionTypes: CommissionType[];
  statusDetail: CommissionStatusDetail;
}

export enum CommissionType {
  PERSONAL = 'PERSONAL',
  PRE_AGREED = 'PRE_AGREED',
  MANUAL = 'MANUAL'
}

export const COMMISSION_TYPE_LIST: CommissionTypeButton[] = [
  { type: 'main', title: LanguageLabel.COMMISSION_TYPE_PERSONAL, description: LanguageLabel.COMMISSION_TYPE_PERSONAL_DESCRIPTION, icon: 'reply', tag: CommissionType.PERSONAL },
  { type: 'main', title: LanguageLabel.COMMISSION_TYPE_PREAGREED, description: LanguageLabel.COMMISSION_TYPE_PREAGREED_DESCRIPTION, icon: 'handshake', tag: CommissionType.PRE_AGREED },
  { type: 'main', title: LanguageLabel.COMMISSION_TYPE_MANUAL, description: LanguageLabel.COMMISSION_TYPE_MANUAL_DESCRIPTION, icon: 'thumbtack', tag: CommissionType.MANUAL }
];

export function getTypeButtonByType(type: CommissionType): CommissionTypeButton {
  const button = COMMISSION_TYPE_LIST.find(i => i.tag === type);
  return button;
}
export class CreateCommissionData {
  type: CommissionType;
  commission: Commission;
  status: CommissionStatus;
}

export enum CreateCommissionStep {
  TYPE,
  COMMISSION,
  STATUS
}

export const TYPE_STATUS_LIST: CommissionStatusButton[] = [
  { type: 'main', commissionTypes: [CommissionType.PERSONAL, CommissionType.PRE_AGREED, CommissionType.MANUAL], statusDetail: getCommissionStatusDetail(CommissionStatus.IN_EVALUATION), tag: CommissionStatus.IN_EVALUATION },
  { type: 'main', commissionTypes: [CommissionType.PRE_AGREED, CommissionType.MANUAL], statusDetail: getCommissionStatusDetail(CommissionStatus.ACCEPTED), tag: CommissionStatus.ACCEPTED },
  { type: 'main', commissionTypes: [CommissionType.PRE_AGREED, CommissionType.MANUAL], statusDetail: getCommissionStatusDetail(CommissionStatus.REFUSED), tag: CommissionStatus.REFUSED },
  { type: 'main', commissionTypes: [CommissionType.MANUAL], statusDetail: getCommissionStatusDetail(CommissionStatus.REFUSED_BY_CUSTOMER), tag: CommissionStatus.REFUSED_BY_CUSTOMER },
  { type: 'main', commissionTypes: [CommissionType.PERSONAL], statusDetail: getCommissionStatusDetail(CommissionStatus.IN_PROGRESS), tag: CommissionStatus.IN_PROGRESS },
  { type: 'main', commissionTypes: [CommissionType.PERSONAL], statusDetail: getCommissionStatusDetail(CommissionStatus.SUSPENDED), tag: CommissionStatus.SUSPENDED }
];

export function getStatusButtonListByType(type: CommissionType): CommissionStatusButton[] {
  const buttons = TYPE_STATUS_LIST.filter((button: CommissionStatusButton) => {
    return button.commissionTypes.includes(type);
  });

  return buttons;
}

