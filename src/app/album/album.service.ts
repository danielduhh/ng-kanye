import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AlbumService {

  private albumsUrl = '/api/albums';  // URL to web api
  public albums: Array<any> = [];

  constructor(private http: Http) { }

  getAlbums() {

    return this.http.get(this.albumsUrl)
      .toPromise()
      .then(response => {

        return response.json()

      })
      .catch(this.handleError);
  }

  save (albums) {
    this.albums = albums;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
