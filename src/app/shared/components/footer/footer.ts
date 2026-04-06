import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../../core/services/language';
import { Theme } from '../../../core/services/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  constructor(public themeService: Theme,
    public languageService: Language,
    private router: Router) { }


    
  scrollTo(section: string) {

    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {

        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 150);

      });

      return;
    }

    // 👉 Si estamos en home
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  get isMenuPage(): boolean {
  return this.router.url.includes('menu');
}
}

