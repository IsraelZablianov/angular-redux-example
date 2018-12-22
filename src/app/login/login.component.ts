import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserCredentials } from "./login-state-management/models";
import { dispatch } from "@angular-redux/store";
import { login } from "./login-state-management/actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  credentials: UserCredentials = {
    username: "",
    password: ""
  };

  constructor(private router: Router) { 
  }

  @dispatch()
  dispatchLogin() {
      const credentials = {
        ...this.credentials
      };

      return login(credentials);
  }

  login() {
    this.dispatchLogin();
    this.router.navigate(['todo']);
  }

}
