import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { NotFound } from './pages/not-found/not-found';
import { Login } from './pages/admin/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'admin/login', component: Login },
  { path: 'not-found', component: NotFound },
  { path: '**', redirectTo: 'not-found' }
];