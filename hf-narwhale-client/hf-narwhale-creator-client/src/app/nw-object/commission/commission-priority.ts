import { LanguageLabel } from 'src/app/nw-language/language-label';

export enum CommissionPriority {
  HIGHER = 'HIGHER',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  LOWER = 'LOWER'
}

export class CommissionPriorityDetail {
  code: CommissionPriority;
  title: LanguageLabel;
  icon: string;
  color: string;
}

export const COMMISSION_PRIORITY_DETAIL_LIST: CommissionPriorityDetail[] = [
  {
    code: CommissionPriority.HIGHER,
    title: LanguageLabel.COMMISSION_PRIORITY_HIGHER,
    icon: 'angle-double-up',
    color: 'red'
  },
  {
    code: CommissionPriority.HIGH,
    title: LanguageLabel.COMMISSION_PRIORITY_HIGH,
    icon: 'angle-up',
    color: 'darkorange'
  },
  {
    code: CommissionPriority.MEDIUM,
    title: LanguageLabel.COMMISSION_PRIORITY_MEDIUM,
    icon: 'bars',
    color: 'green'
  },
  {
    code: CommissionPriority.LOW,
    title: LanguageLabel.COMMISSION_PRIORITY_LOW,
    icon: 'angle-down',
    color: 'blue'
  },
  {
    code: CommissionPriority.LOWER,
    title: LanguageLabel.COMMISSION_PRIORITY_LOWER,
    icon: 'angle-double-down',
    color: 'lightblue'
  },
];

export function getCommissionPriorityDetail(priority: CommissionPriority): CommissionPriorityDetail {
  const typeDetail = COMMISSION_PRIORITY_DETAIL_LIST.find(i => i.code === priority);
  return typeDetail || null;
}
