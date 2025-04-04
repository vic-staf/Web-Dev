// src/app/product-item/product-item.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent {
  @Input() product!: Product;
  @Output() removeProduct = new EventEmitter<number>();


  liked : boolean = false;

  like(): void {

    if (!this.liked) {
    this.product.likes++;
    this.liked = true;}
    else
    if (this.liked) {
      this.product.likes--;
      this.liked = false;}

  }

  remove(): void {
    this.removeProduct.emit(this.product.id);
  }
}
