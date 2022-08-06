import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { CookieService } from './services/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-form-stubby-route-validation';
  constructor(public appSvc: AppService, private cs: CookieService) {
    this.getUserDetail();
  }

  getUserDetail = () => {
    let userDetail = this.cs.getCookie('authentication');
    if (userDetail) {
      userDetail = JSON.parse(this.cs.getCookie('authentication'));;
      console.log(userDetail);
      if (userDetail) {
        this.appSvc.isLoginned = true;
      }
    } 
  }
}
