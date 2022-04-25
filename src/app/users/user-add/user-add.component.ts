import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../users.model';

import * as userActions from "../state/user.actions";
import * as fromUser from "../state/user.reducer";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    gender: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private store: Store<fromUser.AppState>) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  createUser() {

    const newUser: User = {
      name: this.userForm.get("name")?.value,
      gender: this.userForm.get("gender")?.value
    };

    this.store.dispatch(new userActions.CreateUser(newUser));

    this.userForm.reset();

  }

}
