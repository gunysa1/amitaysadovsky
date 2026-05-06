import { defineConfig } from 'astro/config';
import i18n from 'astro-i18n';

export default defineConfig({
  integrations: [
    i18n({
      defaultLanguage: 'en',
      languages: {
        en: 'en-US',
        he: 'he-IL'
      },
      defaultNamespace: 'common'
    })
  ]
});
