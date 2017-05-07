import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

import { Game } from 'app/core';
import { GameService, AppEvent as Ev, HandlerService } from 'app/core';

@Component({
  selector: 'hc-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.scss']
})
export class GameNewComponent implements OnInit {
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private gameSvc: GameService,
    private handler: HandlerService
  ) { }

  ngOnInit() {
    this.form = this.builder.group({
      title: [null, Validators.required]
    });
  }

  onSubmit() {
    let game = this.form.value;
    this.gameSvc.create(game)
    .subscribe(this.handler.observer(Ev.A_GAMES_GAMENEW_GAMECREATED, Ev.E_GAMES_GAMENEW_GAMECREATED));
  }
}
