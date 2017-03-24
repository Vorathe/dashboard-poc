import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cmp-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.scss' ]
})
export class LoginComponent {
  form: FormGroup;
  isLoading = false;
  isError = false;
  errorMsg: string;
  username: string;
  view = 'card';

  constructor(private loginService: LoginService, private router: Router ) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(event, username, password) {
    this.isLoading = true;
    this.isError = false;
    this.errorMsg = '';

    localStorage.setItem('username', this.username);

    this.loginService.doLogin(username, password, 'password', '').then(() => {
      return this.onSuccess();
    }).catch(err => {
      return this.onError(err);
    });

    event.preventDefault();
  }

  onSuccess() {
    this.router.navigate(['']);
    this.isLoading = false;
  }

  onError(err) {
    err = err.json();

    this.isLoading = false;
    this.isError = true;
    this.errorMsg = 'Please check your credentials and try again';

    console.log('Oops! an error occurred while logging in:', err.error);
  }
}
