import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
