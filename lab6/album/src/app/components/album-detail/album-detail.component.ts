import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AlbumService} from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent{

  album: { userId: number; id: number; title: string } | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.album = albumService.getAlbumById(id);
  }

  ngOnInit(): void {
  }


  returnToList(): void {
    this.router.navigate(['/albums']);
  }
}
