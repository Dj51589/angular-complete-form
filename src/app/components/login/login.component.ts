import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/services/cookie.service';
import { AppService } from 'src/app/services/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;
  constructor(private cs: CookieService, private router: Router,
    private appSvc: AppService, private fb: FormBuilder
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
      const authDetails = {
        user: 'Dheeraj',
        token: new Date().getTime()
      }
      this.cs.setCookie('authentication', JSON.stringify(authDetails));
      this.appSvc.setAuthetication();
      this.router.navigate(['/home']);
    }
  }

  signup = () => {
    const url = 'https://www.emiratesnbd.com/en/';
    window.open(url, '_blank');
  }

}
