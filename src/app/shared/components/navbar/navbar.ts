import { Component } from '@angular/core';
import { Theme } from '../../../core/services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public themeService: Theme) { }

  pulseActive = false;

  toggleTheme() {
    this.themeService.toggleTheme();

    this.pulseActive = true;

    setTimeout(() => {
      this.pulseActive = false;
    }, 300);
  }

}
