import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'hc-game-show',
  templateUrl: './game-show.component.html',
  styleUrls: ['./game-show.component.scss']
})
export class GameShowComponent implements OnInit {
  gameObs: FirebaseObjectObservable<any>;

  constructor(
    private fire: AngularFire,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let key = this.route.snapshot.params.key;
    this.gameObs = this.fire.database.object(`/games/${key}`);
  }
}
