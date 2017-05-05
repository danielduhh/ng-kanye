import { TestBed, inject } from '@angular/core/testing';

import { AlbumService } from './album.service.ts';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumService]
    });
  });

  it('should ...', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
