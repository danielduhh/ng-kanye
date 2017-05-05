import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongComponent } from './song.component';
import { SongRoutingModule } from './song-routing.module';
import { SongService } from './song.service';

@NgModule({
  imports: [
    CommonModule,
    SongRoutingModule
  ],
  declarations: [
    SongComponent
  ],
  providers: [
    SongService
  ]
})
export class SongModule { }
