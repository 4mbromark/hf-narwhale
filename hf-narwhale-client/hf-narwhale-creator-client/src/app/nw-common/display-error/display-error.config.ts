import { LanguageLabel } from 'src/app/nw-language/language-label';

export class ErrorConfig {
  code: number;
  title: LanguageLabel;
  description: LanguageLabel;
  icon: string;
  // action: LanguageLabel;
  copyButton: boolean;
}

export const ERROR_CONFIG_LIST: ErrorConfig[] = [
  // { code: 401, title: LanguageLabel.ERROR_401_TITLE, description: LanguageLabel.ERROR_401_DESCRIPTION, icon: 'key', copyButton: false },
  { code: 500, title: LanguageLabel.ERROR_500_TITLE, description: LanguageLabel.ERROR_500_DESCRIPTION, icon: 'bug', copyButton: true },
];

export function getErrorConfig(code: number): ErrorConfig {
  const errorConfig = ERROR_CONFIG_LIST.find(i => i.code === code);
  return errorConfig || null;
}
