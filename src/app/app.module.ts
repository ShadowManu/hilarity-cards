import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppRoutingModule } from './app.routing';
import { GamesModule } from './games';
import { CoreModule } from './core';
import { SharedModule } from './shared';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AngularFireModule.initializeApp(environment.firebase,
      { provider: AuthProviders.Google, method: AuthMethods.Popup }),
    MaterialModule.forRoot(),
    FlexLayoutModule,
    RouterModule,

    AppRoutingModule,
    GamesModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
