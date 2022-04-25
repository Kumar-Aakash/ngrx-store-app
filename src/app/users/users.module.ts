import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { userReducer } from "./state/user.reducer";
// import { userEffect } from "./state/user.effects";

import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';


const userRoutes: Routes = [{ path: '', component: UserComponent }];

@NgModule({
  declarations: [
    UserComponent,
    UserAddComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature("users", userReducer),
  ]
})
export class UsersModule { }
