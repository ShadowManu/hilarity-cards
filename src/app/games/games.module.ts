import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { GamesComponent } from './games.component';
import { GameIndexComponent } from './index/index';
import { GameNewComponent } from './new';

import { GamesRoutingModule } from './games.routing';

@NgModule({
  declarations: [
    GamesComponent,

    GameIndexComponent,
    GameNewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,

    GamesRoutingModule
  ]
})
export class GamesModule { }
