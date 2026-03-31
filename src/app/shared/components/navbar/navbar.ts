import { Component } from '@angular/core';
import { Theme } from '../../../core/services/theme';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../../core/services/language';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public themeService: Theme, public languageService: Language) { }

  
  pulseActive = false;

  toggleTheme() {
    this.themeService.toggleTheme();

    this.pulseActive = true;

    setTimeout(() => {
      this.pulseActive = false;
    }, 300);
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

}
