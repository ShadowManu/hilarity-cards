import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { GamesComponent } from './games.component';
import { GameIndexComponent } from './index/index';

import { GamesRoutingModule } from './games.routing';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    GamesComponent,

    GameIndexComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,

    GamesRoutingModule
  ]
})
export class GamesModule { }
