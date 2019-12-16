import Polyglot from 'node-polyglot';
import config from '../containers/LanguageSwitcher/config';

import messages from './entries';

const locale = getCurrentLanguage(config.defaultLanguage).locale;

const polyglot = new Polyglot({
  locale: locale
});
polyglot.extend(messages[locale]);

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}

export default polyglot;
