// tslint:disable: max-line-length
import { LanguageLabel } from 'src/app/nw-language/language-label';
import { CommissionType } from 'src/app/nw-object/commission/commission-type';
import { Button } from './../../../nw-object/button/button';

export class CommissionBodySection extends Button {
  showOnTypes: CommissionType[];
}

export enum CommissionBodySectionValue {
  ORDER = 'order',
  CUSTOMER = 'customer',
  RECAP = 'recap',
  ACTIONS = 'actions',
  PAYMENT = 'payment',
  MESSAGES = 'messages',
  NOTES = 'notes',
  RESOURCES = 'resources'
}

export const COMMISSION_BODY_SECTION_LIST: CommissionBodySection[] = [
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_ORDER, icon: 'receipt', tag: CommissionBodySectionValue.ORDER, showOnTypes: [
    CommissionType.CUSTOMER,
    CommissionType.PRE_AGREED,
    CommissionType.MANUAL
  ] },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_CUSTOMER, icon: 'user-circle', tag: CommissionBodySectionValue.CUSTOMER, showOnTypes: [
    CommissionType.CUSTOMER,
    CommissionType.PRE_AGREED,
    CommissionType.MANUAL
  ] },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_RECAP, icon: 'info-circle', tag: CommissionBodySectionValue.RECAP, showOnTypes: [
    CommissionType.CUSTOMER,
    CommissionType.PERSONAL,
    CommissionType.PRE_AGREED,
    CommissionType.MANUAL
  ] },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_ACTIONS, icon: 'stream', tag: CommissionBodySectionValue.ACTIONS, showOnTypes: [
    CommissionType.CUSTOMER,
    CommissionType.PERSONAL,
    CommissionType.PRE_AGREED,
    CommissionType.MANUAL
  ] },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_PAYMENT, icon: 'money-bill-wave', tag: CommissionBodySectionValue.PAYMENT, showOnTypes: [
    CommissionType.CUSTOMER,
    CommissionType.PRE_AGREED,
    CommissionType.MANUAL
  ] },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_MESSAGES, icon: 'comments', tag: CommissionBodySectionValue.MESSAGES, showOnTypes: [
    CommissionType.CUSTOMER,
    CommissionType.PRE_AGREED,
  ] },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_NOTES, icon: 'sticky-note', tag: CommissionBodySectionValue.NOTES, showOnTypes: [
    CommissionType.CUSTOMER,
    CommissionType.PERSONAL,
    CommissionType.PRE_AGREED,
    CommissionType.MANUAL
  ] },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_RESOURCES, icon: 'folder-open', tag: CommissionBodySectionValue.RESOURCES, showOnTypes: [
    CommissionType.CUSTOMER,
    CommissionType.PERSONAL,
    CommissionType.PRE_AGREED,
    CommissionType.MANUAL
  ] },
];

