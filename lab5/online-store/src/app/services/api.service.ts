   import { Injectable } from '@angular/core';
   import { HttpClient } from '@angular/common/http';
   import { Observable } from 'rxjs';
   //import {HttpClientModule} from '@angular/common/http';



   @Injectable({
     providedIn: 'root'
   })
   export class ApiService {

     private readonly apiUrl = 'http://127.0.0.1:8000/api';

     private baseUrl = 'http://127.0.0.1:8000/api'; // URL вашего Django API

     constructor(private http: HttpClient) {}


     getProducts(): Observable<any> {
       return this.http.get(`${this.baseUrl}/products`);
     }

     getProduct(id: number): Observable<any> {
       return this.http.get(`${this.baseUrl}/products/${id}`);
     }


     getCategories(): Observable<any> {
       return this.http.get(`${this.baseUrl}/categories`);
     }

     getCategory(id: number): Observable<any> {
       return this.http.get(`${this.baseUrl}/categories/${id}`);
     }


     getProductsByCategory(categoryId: number): Observable<any> {
       return this.http.get(`${this.baseUrl}/categories/${categoryId}/products`);
     }

     addProduct(product: { name: string; price: number; category_id: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

   }
