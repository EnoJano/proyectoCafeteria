import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from '../../../core/services/language';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(
    private auth: Auth,
    private router: Router,
    public languageService: Language,
    private cdr: ChangeDetectorRef
  ) { }

  async onLogin() {
    this.errorMessage = '';

    if (!this.email.trim() && !this.password.trim()) {
      this.errorMessage = 'ADMIN.ERROR_EMPTY_FIELDS';
      return;
    }

    if (!this.email.trim()) {
      this.errorMessage = 'ADMIN.ERROR_EMPTY_EMAIL';
      return;
    }

    if (!this.password.trim()) {
      this.errorMessage = 'ADMIN.ERROR_EMPTY_PASSWORD';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'ADMIN.ERROR_INVALID_EMAIL';
      return;
    }

    this.isLoading = true;

    try {
      await signInWithEmailAndPassword(this.auth, this.email, this.password);
      this.router.navigate(['/admin/dashboard']);
    } catch (error: any) {
      //console.log(error.code);

      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
        case 'auth/invalid-email':
          this.errorMessage = 'ADMIN.LOGIN_ERROR';
          break;
        case 'auth/too-many-requests':
          this.errorMessage = 'ADMIN.ERROR_TOO_MANY';
          break;
        default:
          this.errorMessage = 'ADMIN.LOGIN_ERROR';
      }
      this.cdr.detectChanges();
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }


  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
