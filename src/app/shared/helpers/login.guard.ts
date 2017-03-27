import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private user: LoginService, private router: Router) {}

  canActivate() {
    if (!this.user.isLoggedIn()) {
      this.router.navigate([ '/login' ]);
    }

    return this.user.isLoggedIn();
  }
}
