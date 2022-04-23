// tslint:disable: max-line-length
import { RoutingUrl } from './../../nw-object/url/url';
import { Button } from 'src/app/nw-object/button/button';
import { LanguageLabel } from 'src/app/nw-language/language-label';

export class NavbarButton extends Button {
  url: RoutingUrl;
}

export const NAVBAR_BUTTON_LIST: NavbarButton[] = [
  { type: 'main', title: LanguageLabel.NAVBAR_DASHBOARD_TITLE, tooltip: LanguageLabel.NAVBAR_DASHBOARD_TOOLTIP, icon: 'chart-pie', url: RoutingUrl.DASHBOARD },
  { type: 'main', title: LanguageLabel.NAVBAR_COMMISSIONLIST_TITLE, tooltip: LanguageLabel.NAVBAR_COMMISSIONLIST_TOOLTIP, icon: 'list', url: RoutingUrl.COMMISSION_LIST },
  { type: 'main', title: LanguageLabel.NAVBAR_COMMISSIONARCHIVE_TITLE, tooltip: LanguageLabel.NAVBAR_COMMISSIONARCHIVE_TOOLTIP, icon: 'archive', url: RoutingUrl.COMMISSION_ARCHIVE },
  { type: 'main', title: LanguageLabel.NAVBAR_TEMPLATES_TITLE, tooltip: LanguageLabel.NAVBAR_TEMPLATES_TOOLTIP, icon: 'swatchbook', url: RoutingUrl.TEMPLATES },
  { type: 'main', title: LanguageLabel.NAVBAR_CUSTOMERS_TITLE, tooltip: LanguageLabel.NAVBAR_CUSTOMERS_TOOLTIP, icon: 'users', url: RoutingUrl.CUSTOMERS }
];
