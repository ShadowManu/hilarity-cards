import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import * as firebase from 'firebase/app';

import { HandlerService, AppEvent as Ev } from '../handler';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private handler: HandlerService,
    private router: Router
  ) {}

  login() {
    Observable.of(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
    .subscribe(this.handler.observer(Ev.A_AUTH_AUTHSVC_SIGNEDIN, Ev.E_AUTH_AUTHSVC_SIGNEDIN));
  }
}
