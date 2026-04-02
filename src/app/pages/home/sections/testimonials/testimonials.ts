import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class Testimonials implements OnInit, OnDestroy {

  constructor(private cdr: ChangeDetectorRef,
    private zone: NgZone) {}

  currentIndex = 0;
  sub!: Subscription;

testimonials = [
  {
    name: 'María',
    text: 'El mejor café que he probado.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Carlos',
    text: 'Ambiente perfecto para trabajar.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Sofía',
    text: 'Atención increíble.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Pedro',
    text: 'Volvería mil veces.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Ana',
    text: 'El café es espectacular.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/12.jpg'
  }
];

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.sub = interval(3500).subscribe(() => {
        this.currentIndex =
          (this.currentIndex + 1) % this.testimonials.length;
        this.cdr.detectChanges();
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getClass(i: number) {
    if (i === this.currentIndex) return 'active';

    if (
      i === (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length
    ) return 'prev';

    if (
      i === (this.currentIndex + 1) % this.testimonials.length
    ) return 'next';

    return 'hidden';
  }

}