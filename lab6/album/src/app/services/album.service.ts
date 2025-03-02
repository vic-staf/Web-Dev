import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor() { }
  private albums: { userId: number; id: number; title: string }[] = [];

  setAlbums(albums: { userId: number; id: number; title: string }[]): void {
    this.albums = albums;
  }

  getAlbums(): { userId: number; id: number; title: string }[] {
    return this.albums;
  }

  getAlbumById(id: number): { userId: number; id: number; title: string } | undefined {
    return this.albums.find((album) => album.id === id);
  }
}
