import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AlbumService} from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent {
  photos: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[] = [
    {
      albumId: 1,
      id: 1,
      title: 'Ti1 Aegis',
      url: 'https://liquipedia.net/commons/images/thumb/b/ba/Dota2_Aegis_allmode.png/476px-Dota2_Aegis_allmode.png',
      thumbnailUrl: 'https://liquipedia.net/commons/images/thumb/b/ba/Dota2_Aegis_allmode.png/476px-Dota2_Aegis_allmode.png',
    },
    {
      albumId: 1,
      id: 2,
      title: 'Winning team - Natus Vincere',
      url: 'https://liquipedia.net/commons/images/6/6a/Natus_Vincere_win_The_International_2011.jpg',
      thumbnailUrl: 'https://liquipedia.net/commons/images/6/6a/Natus_Vincere_win_The_International_2011.jpg',
    },
    {
      albumId: 2,
      id: 3,
      title: 'Ti2 Aegis',
      url: 'https://liquipedia.net/commons/images/thumb/b/ba/Dota2_Aegis_allmode.png/476px-Dota2_Aegis_allmode.png',
      thumbnailUrl: 'https://liquipedia.net/commons/images/thumb/b/ba/Dota2_Aegis_allmode.png/476px-Dota2_Aegis_allmode.png',
    },
    {
      albumId: 2,
      id: 4,
      title: 'Winning team - Invictus Gaming',
      url: 'https://liquipedia.net/commons/images/thumb/9/9e/Invictus_Gaming_win_The_International_2012.jpg/921px-Invictus_Gaming_win_The_International_2012.jpg',
      thumbnailUrl: 'https://liquipedia.net/commons/images/thumb/9/9e/Invictus_Gaming_win_The_International_2012.jpg/921px-Invictus_Gaming_win_The_International_2012.jpg',
    },
    {
      albumId: 3,
      id: 5,
      title: 'Ti3 Aegis',
      url: 'https://liquipedia.net/commons/images/thumb/5/53/The_International_2013_aegis_allmode.png/463px-The_International_2013_aegis_allmode.png',
      thumbnailUrl: 'https://liquipedia.net/commons/images/thumb/5/53/The_International_2013_aegis_allmode.png/463px-The_International_2013_aegis_allmode.png',
    },
    {
      albumId: 3,
      id: 6,
      title: 'Winning team - Alliance',
      url: 'https://liquipedia.net/commons/images/thumb/0/04/Alliance_win_The_International_2013.jpg/945px-Alliance_win_The_International_2013.jpg',
      thumbnailUrl: 'https://liquipedia.net/commons/images/thumb/0/04/Alliance_win_The_International_2013.jpg/945px-Alliance_win_The_International_2013.jpg',
    },
    {
      albumId: 4,
      id: 7,
      title: 'Ti4 Aegis',
      url: 'https://liquipedia.net/commons/images/thumb/5/51/The_International_2014_aegis_allmode.png/461px-The_International_2014_aegis_allmode.png',
      thumbnailUrl: 'https://liquipedia.net/commons/images/thumb/5/51/The_International_2014_aegis_allmode.png/461px-The_International_2014_aegis_allmode.png',
    },
    {
      albumId: 4,
      id: 8,
      title: 'Winning team - Newbee',
      url: 'https://liquipedia.net/commons/images/b/b3/Newbee_win_The_International_2014.jpg',
      thumbnailUrl: 'https://liquipedia.net/commons/images/b/b3/Newbee_win_The_International_2014.jpg',
    },
    {
      albumId: 5,
      id: 9,
      title: 'Ti5 Aegis',
      url: 'https://liquipedia.net/commons/images/thumb/a/a4/The_International_2015_aegis_allmode.png/453px-The_International_2015_aegis_allmode.png',
      thumbnailUrl: 'https://liquipedia.net/commons/images/thumb/a/a4/The_International_2015_aegis_allmode.png/453px-The_International_2015_aegis_allmode.png',
    },
    {
      albumId: 5,
      id: 10,
      title: 'Winning team - Evil Geniuses',
      url: 'https://liquipedia.net/commons/images/thumb/a/a3/Evil_Geniuses_win_The_International_2015.jpg/844px-Evil_Geniuses_win_The_International_2015.jpg',
      thumbnailUrl: 'https://liquipedia.net/commons/images/thumb/a/a3/Evil_Geniuses_win_The_International_2015.jpg/844px-Evil_Geniuses_win_The_International_2015.jpg',
    }
  ];

  filteredPhotos: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  } [] | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.filteredPhotos =  this.photos.filter(photo => photo.albumId === id);
  }


  returnToAlbum(): void {
    const albumId = +this.route.snapshot.paramMap.get('id')!;
    this.router.navigate(['/albums', albumId]);
  }
}

