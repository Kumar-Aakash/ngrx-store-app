import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  createUser() {

  }

}
