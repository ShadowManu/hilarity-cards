import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'hc-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private fire: AngularFire) { }

  ngOnInit() {
  }

  login() { this.fire.auth.login(); }
  logout() { this.fire.auth.logout(); }

}
