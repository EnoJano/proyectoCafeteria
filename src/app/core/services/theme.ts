import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private darkMode = true;

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.darkMode = savedTheme === 'dark';
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode = prefersDark;
    }

    this.applyTheme();
  }

  applyTheme() {
    const body = document.body;

    // efecto fade
    body.classList.add('theme-fade');

    if (this.darkMode) {
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
    }

    setTimeout(() => {
      body.classList.remove('theme-fade');
    }, 500);
  }

  isDarkMode() {
    return this.darkMode;
  }
}
