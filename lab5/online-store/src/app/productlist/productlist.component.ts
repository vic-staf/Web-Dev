// src/app/product-list/product-list.component.ts

import { Component, Input } from '@angular/core';
import { Product } from '../models';
import {ProductitemComponent} from '../productitem/productitem.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  imports: [
    NgForOf,
    ProductitemComponent
  ],
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  @Input() products: Product[] = [];

  // src/app/product-list/product-list.component.ts

  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}

