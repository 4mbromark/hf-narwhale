import { LanguageLabel } from './../../nw-language/language-label';
import { CommissionStatusColor } from './../../nw-object/commission/commission-status';
import { Button } from 'src/app/nw-object/button/button';

export enum ToolbarType {
  COMMISSION_LIST,
  COMMISSION
}

export class CommissionStatusFilterButton extends Button {
  color: CommissionStatusColor;
  selected?: boolean;
}

export const COMMISSION_STATUS_FILTER_LIST: CommissionStatusFilterButton[] = [
  { type: 'main', color: CommissionStatusColor.WAITING, tooltip: LanguageLabel.TOOLBAR_STATUS_WAITING },
  { type: 'main', color: CommissionStatusColor.EVALUATION, tooltip: LanguageLabel.TOOLBAR_STATUS_EVALUATION },
  { type: 'main', color: CommissionStatusColor.PAYMENT, tooltip: LanguageLabel.TOOLBAR_STATUS_PAYMENT },
  { type: 'main', color: CommissionStatusColor.OK, tooltip: LanguageLabel.TOOLBAR_STATUS_OK },
  { type: 'main', color: CommissionStatusColor.PROGRESS, tooltip: LanguageLabel.TOOLBAR_STATUS_PROGRESS },
  { type: 'main', color: CommissionStatusColor.DELIVER, tooltip: LanguageLabel.TOOLBAR_STATUS_DELIVER },
  { type: 'main', color: CommissionStatusColor.ERROR, tooltip: LanguageLabel.TOOLBAR_STATUS_ERROR }
];
