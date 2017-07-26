import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class VoteService{

  //TODO observable for votes count change
  public votes: Array<any> = [];
  private albums: Array<any> = [];
  private songs: Array<any> = [];
  private voteCount = new Subject<number>();

  voteCount$ = this.voteCount.asObservable();

  constructor(private http: Http) { }

  updateAlbumSelections (album) {
    this.albums = album;

    this.updateAlbumVotes()
  }

  updateAlbumVotes() {

    this.votes = []
    let selectedSongs = [];

    this.albums.forEach( album => {
      album.songs.forEach(song => {
        if(song.selected === true){
          selectedSongs.push(song);
        }
      })
    });

    this.votes = selectedSongs;
    this.voteCount.next(this.votes.length);
    console.log(this.votes)
  }

}
