   import { Injectable } from '@angular/core';
   import { HttpClient } from '@angular/common/http';
   import { Observable } from 'rxjs';

   @Injectable({
     providedIn: 'root'
   })
   export class ApiService {
     private baseUrl = 'http://127.0.0.1:8000/api'; // URL вашего Django API

     constructor(private http: HttpClient) {}

     // Получить список всех продуктов
     getProducts(): Observable<any> {
       return this.http.get(`${this.baseUrl}/products`);
     }

     // Получить один продукт
     getProduct(id: number): Observable<any> {
       return this.http.get(`${this.baseUrl}/products/${id}`);
     }

     // Получить список всех категорий
     getCategories(): Observable<any> {
       return this.http.get(`${this.baseUrl}/categories`);
     }

     // Получить одну категорию
     getCategory(id: number): Observable<any> {
       return this.http.get(`${this.baseUrl}/categories/${id}`);
     }

     // Получить список продуктов по категории
     getProductsByCategory(categoryId: number): Observable<any> {
       return this.http.get(`${this.baseUrl}/categories/${categoryId}/products`);
     }
   }
