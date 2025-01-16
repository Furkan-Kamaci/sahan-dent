// src/app/content-data.ts

import { Content, Languages } from '../../src/app/services/content.service';


export const CONTENT: Record<Languages, Content> = {
  en: {
    title: 'Welcome',
    description: 'This is a description in English.',
  },
  fr: {
    title: 'Bienvenue',
    description: 'Ceci est une description en français.',
  },
};
