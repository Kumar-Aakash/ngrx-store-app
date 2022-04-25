import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { User } from "../users.model";

import { UsersService } from "../users.service";
import * as userActions from "./user.actions";


@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}


  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUsers>(
      userActions.UserActionTypes.LOAD_USERS
    ),
    mergeMap((action: userActions.LoadUsers) =>
      this.usersService.getUsers().pipe(
        map(
          (users: User[]) =>
            new userActions.LoadUsersSuccess(users)
        ),
        catchError(err => of(new userActions.LoadUsersFail(err)))
      )
    )
  );

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUser>(
      userActions.UserActionTypes.LOAD_USER
    ),
    mergeMap((action: userActions.LoadUser) =>
      this.usersService.getUserById(action.payload).pipe(
        map(
          (user: User) =>
            new userActions.LoadUserSuccess(user)
        ),
        catchError(err => of(new userActions.LoadUserFail(err)))
      )
    )
  );

  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.CreateUser>(
      userActions.UserActionTypes.CREATE_USER
    ),
    map((action: userActions.CreateUser) => action.payload),
    mergeMap((user: User) =>
      this.usersService.createUser(user).pipe(
        map(
          (newUser: User) =>
            new userActions.CreateUserSuccess(newUser)
        ),
        catchError(err => of(new userActions.CreateUserFail(err)))
      )
    )
  );

  @Effect()
  updateUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.UpdateUser>(
      userActions.UserActionTypes.UPDATE_USER
    ),
    map((action: userActions.UpdateUser) => action.payload),
    mergeMap((user: User) =>
      this.usersService.updateUser(user).pipe(
        map(
          (updateUser: User) =>
            new userActions.UpdateUserSuccess({
              id: updateUser.id,
              changes: updateUser
            })
        ),
        catchError(err => of(new userActions.UpdateUserFail(err)))
      )
    )
  );

  @Effect()
  deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.DeleteUser>(
      userActions.UserActionTypes.DELETE_USER
    ),
    map((action: userActions.DeleteUser) => action.payload),
    mergeMap((id: number) =>
      this.usersService.deleteUser(id).pipe(
        map(() => new userActions.DeleteUserSuccess(id)),
        catchError(err => of(new userActions.DeleteUserFail(err)))
      )
    )
  );
}
