import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/services/cookie.service';
import { AppService } from 'src/app/services/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginInfo } from 'src/app/constants/common-classes';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { URI } from 'src/app/constants/uri';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;
  constructor(private cs: CookieService, private router: Router,
    private appSvc: AppService, private fb: FormBuilder, private remote: ApiCallsService
  ) { }

  ngOnInit(): void {
    this.createFormInputs();
  }

  createFormInputs = () => {
    this.loginForm = this.fb.group({
      userId: [null, Validators.required],
      pwd: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    });
  }

  validateUser = () => {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const userName = this.loginForm.controls['userId'].value;
      this.remote
        .send(URI.login, {
          userid: userName
        })
        .subscribe(response => {
          if (response) {
            const authDetails: UserLoginInfo = {
              user: userName,
              token: new Date().getTime().toString()
            }
            this.appSvc.setAuthetication(authDetails);
            this.router.navigate(['/home']);
          }
        }, (err) => {
          alert('error');
        })
    }
  }

  signup = () => {
    const url = 'https://www.emiratesnbd.com/en/';
    window.open(url, '_blank');
  }

}
