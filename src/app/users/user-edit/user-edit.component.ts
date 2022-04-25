import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUser from "../state/user.reducer";
import * as userActions from "../state/user.actions";

import { User } from '../users.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    gender: ['', Validators.required],
    id: null
  });

  constructor(private fb: FormBuilder,
              private store: Store<fromUser.AppState>) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      id: null
    });

    const user$: Observable<User | undefined> = this.store.select(
      fromUser.getCurrentUser
    );

    user$.subscribe(currentUser => {
      if (currentUser) {
        this.userForm.patchValue({
          name: currentUser.name,
          gender: currentUser.gender,
          id: currentUser.id
        });
      }
    });


  }

  updateUser() {

    const updatedUser: User = {
      name: this.userForm.get('name')?.value,
      gender: this.userForm.get("gender")?.value,
      id: this.userForm.get("id")?.value
    };

    this.store.dispatch(new userActions.UpdateUser(updatedUser));

  }

}
