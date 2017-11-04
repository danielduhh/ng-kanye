import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@angular/material'
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule, Store} from '@ngrx/store';
import {reducers, metaReducers} from './core/reducers';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
