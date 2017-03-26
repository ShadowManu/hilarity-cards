import { Component } from '@angular/core';
import { AuthService } from 'app/core';

@Component({
  selector: 'hc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authSvc: AuthService) {}

  login() { this.authSvc.login(); }
}
