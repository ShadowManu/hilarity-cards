import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

import { Game } from 'app/core';

@Component({
  selector: 'hc-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.scss']
})
export class GameNewComponent implements OnInit {
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private snackBar: MdSnackBar,
    private router: Router,
    private fire: AngularFire
  ) { }

  ngOnInit() {
    this.form = this.builder.group({
      title: [null, Validators.required]
    });
  }

  onSubmit() {
    this.fire.database.list('/games').push({
      hostUid: this.fire.auth.getAuth().uid,
      title: this.form.value.title
    })

    .then((response: any) => {
      this.snackBar.open('Game created successfully', undefined, { duration: 2000 });
      this.router.navigate(['/games']);
    });
  }
}
