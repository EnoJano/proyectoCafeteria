import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-preview.html',
  styleUrl: './map-preview.css',
})
export class MapPreview {
  direccion = 'Santiago, Chile';

  abrirMapa() {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.direccion)}`;
    window.open(url, '_blank');
  }
}
