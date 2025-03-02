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
  albums: { userId: number; id: number; title: string }[] = [
    { userId: 4, id: 1, title: 'The International 1' },
    { userId: 5, id: 2, title: 'The International 2' },
    { userId: 1, id: 3, title: 'The International 3' },
    { userId: 4, id: 4, title: 'The International 4' },
    { userId: 4, id: 5, title: 'The International 5' },
    { userId: 4, id: 6, title: 'The International 6' },
    { userId: 4, id: 7, title: 'The International 7' },
    { userId: 4, id: 8, title: 'The International 8' },
    { userId: 4, id: 9, title: 'The International 9' },
    { userId: 4, id: 10, title: 'The International 10' },
    { userId: 4, id: 11, title: 'The International 11' },
    { userId: 4, id: 12, title: 'The International 12' },
    { userId: 4, id: 13, title: 'The International 13' }
  ];

  deleteAlbum(id: number): void {
    this.albums = this.albums.filter((album) => album.id !== id);
  }

  constructor(private albumService: AlbumService) {
    this.albumService.setAlbums(this.albums);
  }
}
