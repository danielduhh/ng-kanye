import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AlbumModule } from '../album/album.module';
import { SongModule } from '../song/song.module';

import { VoteService } from './vote.service';


@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    AlbumModule,
    SongModule,
    RouterModule
  ],
  providers: [VoteService]
})
export class CoreModule { }
