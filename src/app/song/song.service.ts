import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class SongService {

  constructor(private http: Http) { }

  private songsUrl = '/api/songs';  // URL to web api

  getSongs(){
    let songs = {};

    return this.http.get(this.songsUrl)
      .toPromise()
      .then(response => {

        return response.json()

      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
