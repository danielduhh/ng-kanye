import { Component, OnInit } from '@angular/core';
import { VoteService } from '../core/vote.service';
import { SongService } from './song.service';
import { AlbumService } from '../album/album.service';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
  providers: [
    SongService,
    AlbumService
  ]

})
export class SongComponent implements OnInit {

  songs = []

  constructor(
    private SongService: SongService,
    private AlbumService: AlbumService
  ) {}

  ngOnInit() {
    this.SongService.getSongs()
      .subscribe(response => {
        this.songs = response;
      })
  }

}
