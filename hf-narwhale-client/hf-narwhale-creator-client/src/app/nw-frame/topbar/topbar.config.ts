// tslint:disable: max-line-length
import { LanguageLabel } from 'src/app/nw-language/language-label';
import { Button } from 'src/app/nw-object/button/button';

export class UserMenuButton extends Button {

}

export enum UserMenuButtonTag {
  LOGOUT = 'LOGOUT'
}

export const USER_MENU_BUTTON_LIST: UserMenuButton[] = [
  { type: 'main', title: LanguageLabel.USERMENU_LOGOUT_TITLE, tooltip: LanguageLabel.USERMENU_LOGOUT_TOOLTIP, icon: 'sign-out-alt', tag: UserMenuButtonTag.LOGOUT }
];
