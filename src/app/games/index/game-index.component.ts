import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Game } from 'app/core';

@Component({
  selector: 'hc-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.scss']
})
export class GameIndexComponent implements OnInit {
  games: FirebaseListObservable<Game[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.games = this.db.list('/games');
  }
}
