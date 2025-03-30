// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { Category } from './models';
import { HttpClient } from '@angular/common/http';
import {ProductlistComponent} from './productlist/productlist.component';
import {NgForOf, NgIf} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    ProductlistComponent,
    NgIf,
    NgForOf,
    HttpClientModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Store';

  products: any[] = []; // Список продуктов
  categories: any[] = []; // Список категорий


/*  categories: Category[] = [
    {
      id: 1,
      name: 'Games',
      products: [
        {
          id: 1,
          name: 'The Legend of Zelda: Tears of the Kingdom',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hde/h00/80669845749790.jpg?format=gallery-medium',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/the-legend-of-zelda-tears-of-the-kingdom-ns-rus-110261323/?c=750000000&sr=1&qid=2f2801cd8c1f76791dce95f1e229cc3b&ref=shared_link'
        },
        {
          id: 2,
          name: 'The Legend of Zelda: Breath of the Wild',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h46/63762104025118.jpg?format=gallery-medium',
          rating: 5.0,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/the-legend-of-zelda-breath-of-the-wild-ns-rus-10700508/?c=750000000&sr=2&qid=2f2801cd8c1f76791dce95f1e229cc3b&ref=shared_link'
        },
        {
          id: 3,
          name: 'Minecraft',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/h52/63800352079902.jpg?format=gallery-medium',
          rating: 5.0,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/minecraft-nintendo-switch-rus-10701131/?c=750000000&sr=4&qid=2f2801cd8c1f76791dce95f1e229cc3b&ref=shared_link'
        },
        {
          id: 4,
          name: 'Animal Crossing: New Horizons',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h23/63966447566878.jpg?format=gallery-medium',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/animal-crossing-new-horizons-ns-rus-101050403/?c=750000000&sr=5&qid=2f2801cd8c1f76791dce95f1e229cc3b&ref=shared_link'
        },
        {
          id: 2,
          name: 'Super Mario Odyssey',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/h5f/63774005919774.jpg?format=gallery-medium',
          rating: 4.8,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/super-mario-odyssey-nintendo-switch-rus-10700869/?c=750000000&sr=6&qid=2f2801cd8c1f76791dce95f1e229cc3b&ref=shared_link'
        },
      ]
    },
    {
      id: 2,
      name: 'Game Consoles',
      products: [
        {
          id: 6,
          name: 'Nintendo Switch OLED красный-синий',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h4c/64191552651294.jpg?format=gallery-medium',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000&sr=1&qid=c69310d54dddbb0f18dbb4e827b46ee7&ref=shared_link'
        },
        {
          id: 7,
          name: 'Nintendo Switch OLED белый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-medium',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=750000000&sr=3&qid=c69310d54dddbb0f18dbb4e827b46ee7&ref=shared_link'
        },
        {
          id: 8,
          name: 'Nintendo Switch Oled Legend of Zelda',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/had/80770939813918.jpg?format=gallery-medium',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-legend-of-zelda-110363287/?c=750000000&sr=8&qid=c69310d54dddbb0f18dbb4e827b46ee7&ref=shared_link'
        },
        {
          id: 9,
          name: 'Nintendo Switch OLED Mario Red Edition',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h96/84985837027358.jpg?format=gallery-medium',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-mario-red-edition-116111641/?c=750000000&sr=7&qid=c69310d54dddbb0f18dbb4e827b46ee7&ref=shared_link'
        },
        {
          id: 10,
          name: 'Nintendo Switch HW серый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/h47/63761481629726.jpg?format=gallery-medium',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-hw-seryi-4100156/?c=750000000&sr=13&qid=c69310d54dddbb0f18dbb4e827b46ee7&ref=shared_link'
        }
      ]
    },

    {
      id: 3,
      name: 'Cases for consoles',
      products: [
        {
          id: 11,
          name: 'Nintendo Switch Deluxe Travel Case Animal Crossing: New Horizons',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/ha3/85597169614878.jpg?format=gallery-medium',
          rating: 4.5,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/chehol-nintendo-switch-deluxe-travel-case-animal-crossing-new-horizons-mul-tikolor-117959299/?c=750000000&sr=2&qid=26ebf3328f0701349f02ffd5e5a102a1&ref=shared_link'
        },
        {
          id: 12,
          name: 'Nintendo Switch Carrying Case & Screen Protector Mario Odyssey',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h50/h6c/64376827314206.jpg?format=gallery-medium',
          rating: 4.6,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/chehol-nintendo-switch-carrying-case-screen-protector-mario-odyssey-krasnyi-106585145/?c=750000000&sr=4&qid=26ebf3328f0701349f02ffd5e5a102a1&ref=shared_link'
        },
        {
          id: 13,
          name: 'Nintendo Premium Case для Switch/Oled(Pokemon MP-HRS',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/p24/26652629.png?format=gallery-medium',
          rating: 4.6,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/chehol-nintendo-premium-case-dlja-switch-oled-pokemon-mp-hrs-mul-tikolor-122966626/?c=750000000&sr=3&qid=26ebf3328f0701349f02ffd5e5a102a1&ref=shared_link'
        },
        {
          id: 14,
          name: 'Nintendo чехол черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/hc5/64663641653278.jpg?format=gallery-medium',
          rating: 4.1,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/chehol-nintendo-045496430597-chernyi-106358643/?c=750000000&sr=7&qid=26ebf3328f0701349f02ffd5e5a102a1&ref=shared_link'
        },
        {
          id: 15,
          name: 'Nintendo чехол синий',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/h76/64479109087262.jpg?format=gallery-medium',
          rating: 4.2,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/chehol-nintendo-045496430597-sinii-106386238/?c=750000000&sr=8&qid=26ebf3328f0701349f02ffd5e5a102a1&ref=shared_link'
        }
      ]
    },
    {
      id: 4,
      name: 'Controllers',
      products: [
        {
          id: 16,
          name: 'Контроллер Nintendo Switch Pro черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p1a/pbc/28750801.jpg?format=gallery-medium',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-pro-chernyi-13000079/?c=750000000&sr=1&qid=9e5e04421d7528eca58cc92aaea5dbc7&ref=shared_link'
        },
        {
          id: 17,
          name: 'Контроллер Nintendo Switch Pro Controller - Legend of Zelda: Tears of the Kingdom Edition',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd7/h76/81143621222430.png?format=gallery-medium',
          rating: 4.8,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-pro-controller---legend-of-zelda-tears-of-the-kingdom-edition-chernyi-110734870/?c=750000000&sr=2&qid=9e5e04421d7528eca58cc92aaea5dbc7&ref=shared_link'
        },
        {
          id: 18,
          name: 'Контроллер Nintendo Switch Pro Controller Splatoon 3 Edition',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/haa/85260736593950.png?format=gallery-medium',
          rating: 4.7,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-pro-controller-splatoon-3-edition-mnogotsvetnyi-116932170/?c=750000000&sr=4&qid=9e5e04421d7528eca58cc92aaea5dbc7&ref=shared_link'
        },
        {
          id: 19,
          name: 'Контроллер Nintendo Switch Joy-Con',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hde/ha3/84345108201502.jpg?format=gallery-medium',
          rating: 5.0,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-joy-con-krasnyi-sinii-13000112/?c=750000000&sr=5&qid=9e5e04421d7528eca58cc92aaea5dbc7&ref=shared_link'
        },
        {
          id: 20,
          name: 'Контроллер Nintendo Switch Joy-Con',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd7/h41/63851406131230.jpg?format=gallery-medium',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nintendo-switch-joy-con-fioletovyi-oranzhevyi-100123884/?c=750000000&sr=6&qid=9e5e04421d7528eca58cc92aaea5dbc7&ref=shared_link'
        }
      ]
    }
  ];*/
  private readonly API_URL = 'http://127.0.0.1:8000/api';

   constructor(private http: HttpClient) {

    this.loadProducts(); // Загружаем продукты
    this.loadCategories(); // Загружаем категории

   }

    loadProducts(): void {
    this.http.get<any[]>(`${this.API_URL}/products`).subscribe(
      (data) => {
        this.products = data; // Присваиваем полученные данные
      },
      (err) => {
        console.error('Ошибка при загрузке продуктов:', err);
      }
    );
  }

  // Метод загрузки списка категорий
  loadCategories(): void {
    this.http.get<any[]>(`${this.API_URL}/categories`).subscribe(
      (data) => {
        this.categories = data; // Присваиваем полученные данные
      },
      (err) => {
        console.error('Ошибка при загрузке категорий:', err);
      }
    );
  }



  selectedCategory: Category | null = null;

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
}
