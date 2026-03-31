import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimate implements OnInit {

  private lastScrollY = window.scrollY;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > this.lastScrollY;

        this.lastScrollY = currentScrollY;

        const element = this.el.nativeElement;

        if (entry.isIntersecting) {

          element.classList.remove('fade-up', 'fade-down');

          if (scrollingDown) {
            element.classList.add('fade-up');  
          } else {
            element.classList.add('fade-down'); 
          }

          element.classList.add('show');

        } else {
          element.classList.remove('show');
        }

      });
    }, {
      threshold: 0.2
    });

    observer.observe(this.el.nativeElement);
  }
}