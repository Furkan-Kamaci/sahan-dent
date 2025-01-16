// src/app/services/content.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CONTENT } from '../../../public/language/content-data';

export interface Content {
  title: string;
  description: string;
}


export type Languages = 'en' | 'fr';


@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private currentLanguage = new BehaviorSubject<Languages>('en');
  private content: Record<Languages, Content> = CONTENT;

  // Observable for language changes
  currentLanguage$ = this.currentLanguage.asObservable();

  // Get the current content
  getContent(): Content {
    const language = this.currentLanguage.value;
    return this.content[language];
  }

  // Get the current language value
  getCurrentLanguage(): Languages {
    return this.currentLanguage.value;
  }

  // Switch the language
  switchLanguage(language: Languages): void {
    if (this.content[language]) {
      this.currentLanguage.next(language);
    } else {
      console.warn(`Language "${language}" is not supported.`);
    }
  }
}