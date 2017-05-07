import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/observer';
import 'rxjs/add/observable/empty';

import { isNil, isNumber, noop } from 'lodash';

import { AppEvent as Ev } from './event.types';

type Handler = (v?: any) => void;

/**
 * This class allows to handle side effects (primarily errors)
 * and centralize/generalize their behaviors.
 * Most methods are just provided as sugar syntax. The core method to expand from is #handle.
 */
@Injectable()
export class HandlerService {

  constructor(
    private router: Router,
    private snack: MdSnackBar
  ) {}

  /** Handles a given event type with the specified value, if exists */
  handle(ev: Ev, value?: any): void  {
    switch (ev) {
      // APP EVENTS

      case Ev.A_AUTH_AUTHSVC_SIGNEDIN:
        this.router.navigate(['/games']);
        break;

      case Ev.A_GAMES_GAMENEW_GAMECREATED:
        this.snack.open('Game created successfully', undefined, { duration: 2000 });
        this.router.navigate(['/games']);
        break;

      // ERROR EVENTS

      default:
        throw new Error('APP EVENT NOT HANDLED' + Ev[ev]);

    }
  }

  /** Returns a function that can be provided to an Observable#catch call */
  catch(ev: Ev): (error?: any) => Observable<void> {
    return (e) => { this.handle(ev, e); return Observable.empty<void>(); };
  }

  /** Returns an Observer to be provided in compatible signatures (e.g. subscribe, do...) */
  observer(next: Ev | Handler, error: Ev | Handler, complete?: Ev | Handler): Observer<any> {
    return {
      next: this.createHandler(next),
      error: this.createHandler(error),
      complete: this.createHandler(complete)
    };
  }

  /** Provides a handler, either from the argument itself, or a #handle call if it's an AppEvent */
  protected createHandler(handler?: Ev | Handler): (v?: any) => void {
    if (isNil(handler)) return noop;
    return isNumber(handler) ? v => this.handle(handler, v) : handler;
  }
}
