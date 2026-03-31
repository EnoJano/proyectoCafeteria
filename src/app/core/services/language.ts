import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  currentLang = 'es';

  constructor(private translate: TranslateService) {
    this.init();
  }

  init() {
    const savedLang = localStorage.getItem('lang');

    if (savedLang) {
      this.currentLang = savedLang;
    } else {
      // Detectar idioma del navegador
      const browserLang = this.translate.getBrowserLang();
      this.currentLang = browserLang === 'en' ? 'en' : 'es';
    }

    this.translate.use(this.currentLang);
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }

  getCurrentLang() {
    return this.currentLang;
  }
}
