import { Component } from '@angular/core';

import { AuthService } from 'app/core';

@Component({
  selector: 'hc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private authSvc: AuthService) {}

  login() { this.authSvc.login(); }
}
