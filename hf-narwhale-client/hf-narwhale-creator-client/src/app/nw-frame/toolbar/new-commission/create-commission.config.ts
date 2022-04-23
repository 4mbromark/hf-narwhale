import { CommissionOrder } from './../../../nw-object/nw/commission-order';
import { CommissionStatus, getCommissionStatusDetail, CommissionStatusDetail } from 'src/app/nw-object/commission/commission-status';
// tslint:disable: max-line-length
import { LanguageLabel } from 'src/app/nw-language/language-label';
import { Commission } from 'src/app/nw-object/nw/commission';
import { Button } from '../../../nw-object/button/button';
import { CommissionType, getCommissionTypeDetail } from 'src/app/nw-object/commission/commission-type';

export class CommissionTypeButton extends Button {

}

export class CommissionStatusButton extends Button {
  commissionTypes: CommissionType[];
  statusDetail: CommissionStatusDetail;
}

export const COMMISSION_TYPE_BUTTON_LIST: CommissionTypeButton[] = [
  { type: 'main', title: getCommissionTypeDetail(CommissionType.PERSONAL).title, description: getCommissionTypeDetail(CommissionType.PERSONAL).description, icon: getCommissionTypeDetail(CommissionType.PERSONAL).icon, tag: CommissionType.PERSONAL },
  { type: 'main', title: getCommissionTypeDetail(CommissionType.PRE_AGREED).title, description: getCommissionTypeDetail(CommissionType.PRE_AGREED).description, icon: 'handshake', tag: CommissionType.PRE_AGREED },
  { type: 'main', title: getCommissionTypeDetail(CommissionType.MANUAL).title, description: getCommissionTypeDetail(CommissionType.MANUAL).description, icon: 'thumbtack', tag: CommissionType.MANUAL }
];

export function getTypeButtonByType(type: CommissionType): CommissionTypeButton {
  const button = COMMISSION_TYPE_BUTTON_LIST.find(i => i.tag === type);
  return button;
}
export class CreateCommissionData {
  type: CommissionType;
  commission: Commission;
  order: CommissionOrder;
  status: CommissionStatus;
}

export enum CreateCommissionStep {
  TYPE,
  COMMISSION,
  STATUS
}

export const TYPE_STATUS_LIST: CommissionStatusButton[] = [
  { type: 'main', commissionTypes: [CommissionType.PERSONAL, CommissionType.PRE_AGREED, CommissionType.MANUAL], statusDetail: getCommissionStatusDetail(CommissionStatus.IN_EVALUATION), tag: CommissionStatus.IN_EVALUATION },
  { type: 'main', commissionTypes: [CommissionType.MANUAL], statusDetail: getCommissionStatusDetail(CommissionStatus.ACCEPTED), tag: CommissionStatus.ACCEPTED },
  { type: 'main', commissionTypes: [CommissionType.MANUAL], statusDetail: getCommissionStatusDetail(CommissionStatus.REFUSED), tag: CommissionStatus.REFUSED },
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

