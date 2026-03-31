import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  products = [
    { name: 'Espresso', price: '$2.000', category: 'Café', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=800' },
    { name: 'Latte', price: '$3.500', category: 'Café', image: 'https://i0.wp.com/foodandwineespanol.com/wp-content/uploads/2024/01/Diseno-sin-titulo-34.webp?fit=2560%2C1440&ssl=1' },
    { name: 'Capuccino', price: '$3.000', category: 'Café', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800' },
    { name: 'Cold Brew', price: '$3.800', category: 'Café', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800' },

    { name: 'Cheesecake', price: '$4.000', category: 'Postres', image: 'https://www.recetasnestle.cl/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/bb0a8b1cfca8f77eec55fb6f1fc17390.jpg?itok=GSSJaa_s' },
    { name: 'Brownie', price: '$2.500', category: 'Postres', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800' }
  ];

  get categories() {
    return [...new Set(this.products.map(p => p.category))];
  }

  getProductsByCategory(category: string) {
    return this.products.filter(p => p.category === category);
  }

}
