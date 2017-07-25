import { Component, OnInit } from '@angular/core';
import { VoteService } from '../core/vote.service';
import { AlbumService } from './album.service';
import { SongService } from '../song/song.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [
    SongService
  ]
})
export class AlbumComponent implements OnInit {

  albums = [];
  votes = [];

  constructor(
    private AlbumService: AlbumService,
    private SongService: SongService,
    private VoteService: VoteService
  ) {

  }

  ngOnInit() {

    // check if our saved state exists
    if (this.AlbumService.albums.length > 0){
      this.albums = this.AlbumService.albums;
    } else {
      // it doesn't, so fetch albums
      this.AlbumService.getAlbums()
        .then(response => {

          this.albums = response;

          // get songs as well
          this.SongService.getSongs()
            .then(response => {

              let songs = response;

              this.albums.forEach(a => {

                a.songs = [];
                a.selected = false;

                songs.forEach(s => {

                  s.selected = false;

                  if (s.album_title === a.title){
                    a.songs.push(s)
                  }
                })
              })

            })
        });
    }

  }

  ngOnDestroy() {

    // save the state of our array when we switch views
    this.AlbumService.save(this.albums)
  }

}
