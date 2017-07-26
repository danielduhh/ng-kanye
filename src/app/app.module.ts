import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdSidenavModule, MdToolbarModule, MdButtonModule, MdSnackBarModule} from '@angular/material'
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule, Store} from '@ngrx/store';
import {reducer} from './core/reducers';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from './core/core.module';
import { AppComponent, NotificationComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent
  ],
  bootstrap: [
    AppComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdSnackBarModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 5})
  ]})
export class AppModule { }
