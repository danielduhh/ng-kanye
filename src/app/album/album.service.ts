import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

@Injectable()
export class AlbumService {

  private albumsUrl = '/api/albums';  // URL to web api
  public albums: Array<any> = [];

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get(this.albumsUrl).catch(this.handleError)
  }

  save (albums) {
    this.albums = albums;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
