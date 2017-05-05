import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album.component';

const albumRoutes: Routes = [
  { path: 'map', component: AlbumComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(albumRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AlbumRoutingModule { }
