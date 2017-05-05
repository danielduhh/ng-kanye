import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SongComponent } from './song.component';

const songRoutes: Routes = [
  { path: 'songs', component: SongComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(songRoutes)

  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class SongRoutingModule { }
