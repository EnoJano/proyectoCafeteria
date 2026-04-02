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
    private zone: NgZone) { }

  currentIndex = 0;
  sub!: Subscription;

  testimonials = [
    {
      name: 'María',
      text: 'El mejor café que he probado, el ambiente es increíble.'
    },
    {
      name: 'Carlos',
      text: 'Un lugar perfecto para trabajar y relajarse.'
    },
    {
      name: 'Sofía',
      text: 'La atención es excelente y el café espectacular.'
    },
    {
      name: 'Pedro',
      text: 'Muy buen ambiente, volvería sin dudarlo.'
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