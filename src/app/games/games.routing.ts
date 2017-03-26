import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent } from './games.component';

import { GameIndexComponent } from './index/index';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'games', component: GamesComponent, children: [

      { path: '', component: GameIndexComponent }

    ]}
  ])],
  exports: [RouterModule]
})
export class GamesRoutingModule {

}
