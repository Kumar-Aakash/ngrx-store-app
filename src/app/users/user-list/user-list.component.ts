import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Store, select } from "@ngrx/store";

import * as userActions from "../state/user.actions";
import * as fromUser from "../state/user.reducer";
import { User } from "../users.model";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromUser.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new userActions.LoadUsers());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
    this.error$ = this.store.pipe(select(fromUser.getError));
  }

  deleteUser(user: User) {
    if (confirm("Are You Sure You want to Delete the User?")) {
      this.store.dispatch(new userActions.DeleteUser(user.id));
    }
  }

  editUser(customer: User) {
    this.store.dispatch(new userActions.LoadUser(customer.id));
  }

}
