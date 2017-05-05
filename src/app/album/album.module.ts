import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material'
import { FormsModule }   from '@angular/forms';


import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumService } from './album.service';

@NgModule({
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    AlbumComponent
  ],
  providers: [
    AlbumService
  ]
})
export class AlbumModule { }
