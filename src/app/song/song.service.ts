import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

@Injectable()
export class SongService {

  constructor(private http: HttpClient) { }

  private songsUrl = '/api/songs';  // URL to web api

  getSongs(){
    return this.http.get(this.songsUrl).catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
