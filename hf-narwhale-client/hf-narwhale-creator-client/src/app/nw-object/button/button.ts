import { LanguageLabel } from 'src/app/nw-language/language-label';
import { ButtonAlt } from './button-alt';

export class Button {
  type: 'main' | 'line';
  icon?: string;
  title?: LanguageLabel;

  name?: LanguageLabel; // titolo esteso o complementare
  description?: LanguageLabel;
  tooltip?: LanguageLabel; // tooltip

  alt?: ButtonAlt;

  tag?: string; // riservato per tags
}
