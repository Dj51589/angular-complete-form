import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';
import { CookieService } from './services/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  userInfo = {};
  showLoader = false;
  constructor(public appSvc: AppService, private cs: CookieService,
    private router: Router, private chg: ChangeDetectorRef
  ) {
    this.appSvc.showLoader.subscribe((state: boolean) => {
      this.showLoader = state;
      this.chg.detectChanges();
    })
    this.getUserDetail();
  }

  getUserDetail = () => {
    let userDetail = window.sessionStorage.getItem('userInfo');
    const userToken = this.cs.getCookie('authentication');
    if (userToken) {
      this.appSvc.setAuthetication({
        token: userToken,
        user: userDetail || ''
      });
      this.userInfo = {
        user: userDetail
      };
    } else {
      this.router.navigate(['login']);
    }
  }

  logout = () => {
    this.appSvc.logout();
  }
}
