import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Entrantes as ENTRANTES } from '../../models/product.model';

@Component({
  selector: 'app-entrantes',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './entrantes.html',
  styleUrls: ['./entrantes.css'],
})
export class Entrantes {
  items: Product[] = ENTRANTES;

  formatPrice(price: number): string {
    return price.toFixed(2) + ' €';
  }
}
