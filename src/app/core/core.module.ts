import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AlbumModule } from '../album/album.module';
import { SongModule } from '../song/song.module';

import { NavbarComponent } from './navbar/navbar.component'
import { SidenavComponent} from './sidenav/sidenav.component'

import { VoteService } from './vote.service';


@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent
  ],
  exports: [
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    AlbumModule,
    SongModule,
    RouterModule
  ],
  providers: [VoteService]
})
export class CoreModule { }
