import { Component, OnInit } from '@angular/core';
import { IStatement, IUserLoginInfo, UserLoginInfo } from 'src/app/constants/common-classes';
import { URI } from 'src/app/constants/uri';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  statements: IStatement[] = [];
  userLoginInfo: UserLoginInfo;
  userInfo: IUserLoginInfo;
  loader = false;
  constructor(private appSvc: AppService, private remote: ApiCallsService) { }

  ngOnInit(): void {
    this.userLoginInfo = this.appSvc.userInfo;
    this.getUserAccountDetail();
    this.getStatement();
  }

  getUserAccountDetail = () => {
    this.remote
      .get(URI.userInfo)
      .subscribe((response: any) => {
        if (response) {
          this.userInfo = response;
        }
      });
  }
  getStatement = () => {
    this.loader = true;
    this.remote
      .get(URI.statement)
      .subscribe((response: any) => {
        this.loader = false;
        if (response) {
          this.statements = response;
        }
      });
  }

}
