import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimate } from "../../../../shared/directives/scroll-animate";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-menu-preview',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimate, RouterLink, RouterModule],
  templateUrl: './menu-preview.html',
  styleUrl: './menu-preview.css',
})
export class MenuPreview {
  products = [
    {
      name: 'Latte',
      price: '$3.500',
      image: 'https://i0.wp.com/foodandwineespanol.com/wp-content/uploads/2024/01/Diseno-sin-titulo-34.webp?fit=2560%2C1440&ssl=1'
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
