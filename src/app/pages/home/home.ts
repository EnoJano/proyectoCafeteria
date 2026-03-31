import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { MenuPreview } from './sections/menu-preview/menu-preview';
import { MapPreview } from './sections/map-preview/map-preview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, MenuPreview, MapPreview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
