import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {
  constructor(
    private router: Router,
  ) {}

  goHome() {
    this.router.navigate(['/']);
  }
}