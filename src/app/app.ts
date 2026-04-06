import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cafeteria-app');
  showLayout = true;

  constructor(private router: Router) {
    this.updateLayout(this.router.url);
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateLayout(event.urlAfterRedirects);
      });
  }

  private updateLayout(url: string) {
    this.showLayout = !url.includes('not-found');
    this.showLayout = !url.includes('admin/login');
  }
}