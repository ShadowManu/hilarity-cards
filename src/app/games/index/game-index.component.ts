import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Game } from 'app/core';

@Component({
  selector: 'hc-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.scss']
})
export class GameIndexComponent implements OnInit {
  games: FirebaseListObservable<Game[]>;

  constructor(private fire: AngularFire) {}

  ngOnInit() {
    this.games = this.fire.database.list('/games');

    // DEBUG
    this.games.subscribe(d => console.debug('games', d), e => console.debug('gamesError', e));
  }
}
