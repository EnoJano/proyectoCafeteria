import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { MenuPreview } from './sections/menu-preview/menu-preview';
import { MapPreview } from './sections/map-preview/map-preview';
import { ScrollAnimate } from '../../shared/directives/scroll-animate';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, MenuPreview, MapPreview, ScrollAnimate],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
