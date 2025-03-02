import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes), // Указываем маршруты
        importProvidersFrom(HttpClientModule), // Подключаем HttpClient
    ],
}).catch((err) => console.error(err));
