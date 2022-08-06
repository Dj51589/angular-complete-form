import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoRecordFoundComponent } from './components/common/no-record-found/no-record-found.component';
import { NoPageFoundComponent } from './components/common/no-page-found/no-page-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LandingComponent } from './components/landing/landing.component';
import { FormValidationMessagesComponent } from './components/common/form-validation-messages/form-validation-messages.component';
import { LoginComponent } from './components/login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { StatementsComponent } from './components/statements/statements.component';
import { MatCardModule } from '@angular/material/card';
import { AuthInterceptor } from './services/auth.interceptor';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { ToastrModule } from 'ngx-toastr';
import { SuccessComponent } from './components/common/success/success.component';
import { ErrorComponent } from './components/common/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NoRecordFoundComponent,
    NoPageFoundComponent,
    LandingComponent,
    FormValidationMessagesComponent,
    LoginComponent,
    TransferFundComponent,
    StatementsComponent,
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
