import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { NotFound } from './pages/not-found/not-found';
import { Login } from './pages/admin/login/login';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { Categorias } from './pages/admin/categorias/categorias';
import { Productos } from './pages/admin/productos/productos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'not-found', component: NotFound },
  { path: 'admin/login', component: Login },
  { path: 'admin/dashboard', component: Dashboard },
  { path: 'admin/categorias', component: Categorias },
  { path: 'admin/productos', component: Productos },
  { path: '**', redirectTo: 'not-found' }
];