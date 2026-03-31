import { Component, OnInit, OnDestroy, ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})

export class Hero implements OnInit, OnDestroy {

  currentIndex = 0;
  interval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  slides = [
  {
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1920'
  },
  {
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1920'
  },
  {
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1920'
  }
];

  ngOnInit() {
    //console.log('Hero iniciado');
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 3500);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}