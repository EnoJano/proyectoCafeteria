import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../../core/services/language';
import { Theme } from '../../../core/services/theme';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  constructor(public themeService: Theme, public languageService: Language) { }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
