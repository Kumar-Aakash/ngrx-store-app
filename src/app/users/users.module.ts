import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

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
  ]
})
export class UsersModule { }
