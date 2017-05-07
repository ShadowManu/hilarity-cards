import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'hc-game-show',
  templateUrl: './game-show.component.html',
  styleUrls: ['./game-show.component.scss']
})
export class GameShowComponent implements OnInit {
  gameObs: FirebaseObjectObservable<any>;

  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let key = this.route.snapshot.params.key;
    this.gameObs = this.db.object(`/games/${key}`);
  }
}
