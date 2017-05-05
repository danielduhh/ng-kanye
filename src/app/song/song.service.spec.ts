import { TestBed, inject } from '@angular/core/testing';

import { SongService } from './song.service.ts';

describe('SongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongService]
    });
  });

  it('should ...', inject([SongService], (service: SongService) => {
    expect(service).toBeTruthy();
  }));
});
