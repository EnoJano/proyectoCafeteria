import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { MenuPreview } from './sections/menu-preview/menu-preview';
import { MapPreview } from './sections/map-preview/map-preview';
import { ScrollAnimate } from '../../shared/directives/scroll-animate';
import { About } from './sections/about/about';
import { Testimonials } from './sections/testimonials/testimonials';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, MenuPreview, MapPreview, ScrollAnimate, About, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
