import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  updateUser() {

  }

}
