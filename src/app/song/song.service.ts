import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import * as env from '../../environments/environment';

@Injectable()
export class SongService {

  constructor(private http: Http) { }

  getSongs(){
    let songs = {};

    return this.http.get(`${env.environment.apiServer}/songs`)
      .toPromise()
      .then(response => {

        return response.json()

      })
      .catch(err => {
        this.loadCacheKeys();
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  loadCacheKeys(): void {
    let caches = window['caches'];
    caches.keys().then(keys => console.log(JSON.stringify(keys)));
  }


}
