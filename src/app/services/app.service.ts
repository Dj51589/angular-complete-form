import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserLoginInfo } from '../constants/common-classes';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  fullLoader = false;
  isLoginned = false;
  userInfo: UserLoginInfo;

  showLoader = new Subject<boolean>();
  constructor(private cs: CookieService, private router: Router) { }

  isAuthenticated = () => {
    return this.isLoginned;
  }

  setAuthetication = (userInfo: UserLoginInfo) => {
    this.isLoginned = true;
    this.userInfo = userInfo;
    window.sessionStorage.setItem('userInfo', userInfo.user)
    this.cs.setCookie('authentication', userInfo.token);
  }

  logout = () => {
    this.isLoginned = false;
    this.userInfo.user = '';
    window.sessionStorage.clear();
    this.cs.deleteCookie('authentication');
    this.router.navigate(['login']);
  }
}
