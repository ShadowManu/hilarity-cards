import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';

import { GamesRoutingModule } from './games.routing';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    GamesRoutingModule
  ]
})
export class GamesModule { }
