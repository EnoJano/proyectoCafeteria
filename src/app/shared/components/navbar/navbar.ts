import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Theme } from '../../../core/services/theme';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../../core/services/language';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public themeService: Theme,
    public languageService: Language,
    private cdr: ChangeDetectorRef,
    private router: Router) { }


  pulseActive = false;

  isMenuPage = false;

  isMenuOpen = false;

  ngOnInit() {
    this.onScroll();

    this.router.events.subscribe(() => {
      this.isMenuPage = this.router.url.includes('menu');
    });
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

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

  activeSection: string = 'inicio';

  scrollTo(section: string) {


    if (this.isMenuPage) {
      this.router.navigate(['/']).then(() => {

        setTimeout(() => {
          const element = document.getElementById(section);

          if (!element) return;

          const navbar = document.querySelector('.navbar') as HTMLElement;
          const navbarHeight = navbar?.offsetHeight || 80;

          const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });

        }, 150); 
      });

      return;
    }


    const element = document.getElementById(section);

    if (!element) return;

    const navbar = document.querySelector('.navbar') as HTMLElement;
    const navbarHeight = navbar?.offsetHeight || 80;

    const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['inicio', 'menu', 'mapa'];

    for (let section of sections) {
      const element = document.getElementById(section);

      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
        }
      }
    }
  }

}
