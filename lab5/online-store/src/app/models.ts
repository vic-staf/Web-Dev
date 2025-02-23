// src/app/models.ts

export interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  likes: number;
  link: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}
