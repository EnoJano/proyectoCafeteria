import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-map-preview',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
