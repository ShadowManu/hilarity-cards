import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from 'app/core';

@Component({
  selector: 'hc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private authSvc: AuthService) {}

  login() { return this.authSvc.login(); }
}
