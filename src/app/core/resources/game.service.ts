import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';

import { HandlerService, AppEvent as Ev } from '../handler';
import { Game } from '../types';

@Injectable()
export class GameService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private handler: HandlerService
  ) { }

  // TODO replace output any
  create(game: Game): Observable<any> {
    return Observable.of(this.db.list('/games').push({
      // hostUid: this.auth.getAuth().uid,
      title: game.title
    }));
  }
}
