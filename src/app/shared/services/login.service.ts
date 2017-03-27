import { Injectable, EventEmitter, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../../app.config';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  private loggedIn = false;
  loginEvent: EventEmitter<any> = new EventEmitter();
  usernameEvent: EventEmitter<any> = new EventEmitter();
  tokenEvent: EventEmitter<any> = new EventEmitter();
  access_token;
  refresh_token;
  expires_in;
  username: string;

  constructor(
    private http: Http,
    private router: Router,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {
    this.loggedIn = !!localStorage.getItem('access_token');
  }

  doLogin(username, password, grant, refreshToken) {
    let headers = new Headers();
    let loginParams = new URLSearchParams();
    let domain = this.config.domain;

    this.username = username || localStorage.getItem('username');

    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');

    if (grant !== 'refresh_token') {
      loginParams.append('grant_type', grant);
      loginParams.append('username', username);
      loginParams.append('password', password);
    } else {
      loginParams.append('grant_type', grant);
      loginParams.append('refresh_token', refreshToken);
    }

    loginParams.append('client_id', 'my-trusted-client');
    loginParams.append('client_secret', 'password');

    let body = loginParams.toString();

    return this.http.post(
        // See src/custom-typings.d.ts
        // See also webpack.config.js for api assignment
        domain + this.config.appURI['login'],
        body,
        { headers }
      ).toPromise().then(res => {
        let data = res.json();

        if (data.access_token) {
          this.setToken(data);
          this.loggedIn = true;
          this.loginEvent.emit(this.isLoggedIn());
          this.usernameEvent.emit(this.username);
          this.tokenEvent.emit(data);
        }
      });
  }

  setToken(data) {
    let rightNow = new Date().getTime();
    let expireDate = rightNow + 1000 * data.expires_in;

    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.setItem('country', data.country);
    localStorage.setItem('expires_on', expireDate.toString());

    console.log('token has been set...');
    console.log('access_token -> ', localStorage.getItem('access_token'));
    console.log('refresh_token -> ', localStorage.getItem('refresh_token'));
  }

  /*checkToken() {
    let rightNow = new Date().getTime();
    let expiresOn = parseInt(localStorage.getItem('expires_on'), 10);

    return Promise.resolve(rightNow >= expiresOn).then(expired => {
      console.log('current time -> ', rightNow);
      console.log('expires time -> ', expiresOn);

      if (expired) {
        let refreshToken = localStorage.getItem('refresh_token');

        console.log('sending refresh token -> ', refreshToken);

        return this.doLogin('', '', 'refresh_token', refreshToken).then(() => {
          console.log('token has been set in checkToken --- ', localStorage.getItem('access_token'));
        }).catch(err => {
          console.log(err);

          // ga('send', 'event', 'Login and Signup', 'Refresh token expired', 'Failed Attempt');

          return this.logout();
        });
      } else {
        console.log('finished check token...');
      }
    });
  }*/

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expires_on');
    localStorage.removeItem('username');
    localStorage.removeItem('country');

    this.loggedIn = false;
    this.loginEvent.emit(this.isLoggedIn());
    this.router.navigate([ '/login' ]);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
