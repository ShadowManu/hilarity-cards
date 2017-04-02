import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { GamesRoutingModule } from './games.routing';
import { SharedModule } from 'app/shared';

import { GamesComponent } from './games.component';
import { GameIndexComponent } from './index/index';
import { GameNewComponent } from './new';
import { GameShowComponent } from './show';

@NgModule({
  declarations: [
    GamesComponent,
    GameIndexComponent,
    GameNewComponent,
    GameShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,

    GamesRoutingModule,
    SharedModule
  ]
})
export class GamesModule { }
