import { ButtonAlt } from './button-alt';

export class Button {
  type: 'main' | 'line';
  icon?: string;
  title?: string;

  name?: string; // titolo esteso o complementare
  description?: string;
  tooltip?: string; // tooltip

  alt?: ButtonAlt;

  tag?: string; // riservato per tags
}
