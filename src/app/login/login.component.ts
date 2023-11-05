import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { loginAction } from '../actions/login.action';
import { loginData } from '../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['username', [Validators.required]],
      password: ['password', [Validators.required]]
    });
  }

  loginData!:loginData

  onSubmit() {
    console.log(this.loginForm.value)

    this.loginData = this.loginForm.value

    this.store.dispatch(loginAction({loginDetails: this.loginData}))

    this.router.navigate(['/home'])
  }
}
