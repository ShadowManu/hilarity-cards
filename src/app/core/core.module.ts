import { NgModule } from '@angular/core';

import { AuthService } from './auth';
import { HandlerService } from './handler';
import { GameService } from './resources';

@NgModule({
  providers: [
    // Auth
    AuthService,

    // Common
    HandlerService,

    // resources
    GameService
  ]
})
export class CoreModule { }
