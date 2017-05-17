import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule, Store} from '@ngrx/store';
import {reducer} from './core/reducers';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 5})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
