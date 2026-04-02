import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements OnInit, OnDestroy {

  currentIndex = 0;
  interval: any;

  constructor(private cdr: ChangeDetectorRef) { }

  slides = [
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200',
    'https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?q=80&w=1200'
  ];

  ngOnInit() {

    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 4000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}