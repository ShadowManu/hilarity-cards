import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    private fire: AngularFire,
    private router: Router
  ) {}

  login() {
    this.fire.auth.login().then(() => this.router.navigate(['/games']));
  }
}
