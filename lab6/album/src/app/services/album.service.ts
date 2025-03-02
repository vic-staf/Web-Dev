import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) {

  }

  private albums: { userId: number; id: number; title: string }[] = [];

  setAlbums(): void {
    if (this.albums.length) {return;}
    let temp = this.http.get<{ userId: number; id: number; title: string }[]>('https://jsonplaceholder.typicode.com/albums');
    temp.subscribe((data) => {
      this.albums = data;
    });
  }

  getAlbums(): { userId: number; id: number; title: string }[] {
    return this.albums;
  }

  getAlbumById(id: number): { userId: number; id: number; title: string } | undefined {
    return this.albums.find((album) => album.id === id);
  }

  deleteAlbum(id :number): Observable<{}>{
    return this.http.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  // Новый метод для загрузки альбомов
  fetchAlbums(): Observable<{ userId: number; id: number; title: string }[]> {

    return this.http.get<{ userId: number; id: number; title: string }[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
