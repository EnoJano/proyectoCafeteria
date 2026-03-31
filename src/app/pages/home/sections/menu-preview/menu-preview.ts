import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-preview',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu-preview.html',
  styleUrl: './menu-preview.css',
})
export class MenuPreview {
  products = [
    {
      name: 'Latte',
      price: '$3.500',
      image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=800'
    },
    {
      name: 'Espresso',
      price: '$2.000',
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=800'
    },
    {
      name: 'Capuccino',
      price: '$3.000',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800'
    },
    {
      name: 'Cold Brew',
      price: '$3.800',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800'
    }
  ];
}
