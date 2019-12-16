import themes from '../../config/themes';

import englishLang from '../../image/flag/uk.svg';
import chineseLang from '../../image/flag/china.svg';
import spanishLang from '../../image/flag/spain.svg';
import frenchLang from '../../image/flag/france.svg';
import italianLang from '../../image/flag/italy.svg';

const config = {
  defaultLanguage: window.localStorage.getItem('locale') || themes.language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: englishLang,
    },
    {
      languageId: 'chinese',
      locale: 'zh',
      text: 'Chinese',
      icon: chineseLang,
    },
    {
      languageId: 'spanish',
      locale: 'es',
      text: 'Spanish',
      icon: spanishLang,
    },
    {
      languageId: 'french',
      locale: 'fr',
      text: 'French',
      icon: frenchLang,
    },
    {
      languageId: 'italian',
      locale: 'it',
      text: 'Italian',
      icon: italianLang,
    },
  ],
};

export default config;