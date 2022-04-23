import { LanguageLabel } from './../../nw-language/language-label';
import { Commission } from './../nw/commission';

export enum CommissionType {
  CUSTOMER = 'CUSTOMER',
  PERSONAL = 'PERSONAL',
  PRE_AGREED = 'PRE_AGREED',
  MANUAL = 'MANUAL'
}

export class CommissionTypeDetail {
  code: CommissionType;
  title: LanguageLabel;
  description: LanguageLabel;
  icon: string;
}

export const COMMISSION_TYPE_DETAIL_LIST: CommissionTypeDetail[] = [
  {
    code: CommissionType.CUSTOMER,
    title: LanguageLabel.COMMISSION_TYPE_CUSTOMER,
    description: LanguageLabel.COMMISSION_TYPE_CUSTOMER_DESCRIPTION,
    icon: 'location-arrow' // map-pin
  },
  {
    code: CommissionType.PERSONAL,
    title: LanguageLabel.COMMISSION_TYPE_PERSONAL,
    description: LanguageLabel.COMMISSION_TYPE_PERSONAL_DESCRIPTION,
    icon: 'reply'
  },
  {
    code: CommissionType.PRE_AGREED,
    title: LanguageLabel.COMMISSION_TYPE_PREAGREED,
    description: LanguageLabel.COMMISSION_TYPE_PREAGREED_DESCRIPTION,
    icon: 'handshake'
  },
  {
    code: CommissionType.MANUAL,
    title: LanguageLabel.COMMISSION_TYPE_MANUAL,
    description: LanguageLabel.COMMISSION_TYPE_MANUAL_DESCRIPTION,
    icon: 'thumbtack'
  },
];

export function getCommissionTypeDetail(type: CommissionType): CommissionTypeDetail {
  const typeDetail = COMMISSION_TYPE_DETAIL_LIST.find(i => i.code === type);
  return typeDetail || null;
}
