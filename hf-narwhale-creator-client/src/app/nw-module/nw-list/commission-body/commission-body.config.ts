import { LanguageLabel } from 'src/app/nw-language/language-label';
import { Button } from './../../../nw-object/button/button';

export class Section extends Button {

}

export enum SectionValue {
  ORDER = 'order',
  CUSTOMER = 'customer',
  RECAP = 'recap',
  ACTIONS = 'actions',
  PAYMENT = 'payment',
  MESSAGES = 'messages',
  NOTES = 'notes',
  RESOURCES = 'resources'
}

export const SECTION_LIST: Section[] = [
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_ORDER, icon: 'receipt', tag: SectionValue.ORDER },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_CUSTOMER, icon: 'user-circle', tag: SectionValue.CUSTOMER },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_RECAP, icon: 'info-circle', tag: SectionValue.RECAP },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_ACTIONS, icon: 'stream', tag: SectionValue.ACTIONS },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_PAYMENT, icon: 'money-bill-wave', tag: SectionValue.PAYMENT },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_MESSAGES, icon: 'comments', tag: SectionValue.MESSAGES },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_NOTES, icon: 'sticky-note', tag: SectionValue.NOTES },
  { type: 'main', title: LanguageLabel.COMMISSION_SECTION_RESOURCES, icon: 'folder-open', tag: SectionValue.RESOURCES },
];

