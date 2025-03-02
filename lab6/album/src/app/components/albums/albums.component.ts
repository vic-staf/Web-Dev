import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgForOf} from '@angular/common';
import {AlbumService} from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent {
  albums: { userId: number; id: number; title: string }[] = [];

  deleteAlbum(id: number): void {
    this.albums = this.albums.filter((album) => album.id !== id);
  }

  constructor(private albumService: AlbumService) {
    this.albumService.setAlbums();
    this.albums = this.albumService.getAlbums();
  }
}
