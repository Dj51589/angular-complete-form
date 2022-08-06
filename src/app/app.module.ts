import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { DetailsComponent } from './components/details/details.component';
import { NoRecordFoundComponent } from './components/common/no-record-found/no-record-found.component';
import { NoPageFoundComponent } from './components/common/no-page-found/no-page-found.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { LandingComponent } from './components/landing/landing.component';
import { FormValidationMessagesComponent } from './components/common/form-validation-messages/form-validation-messages.component';
import { LoginComponent } from './components/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    DetailsComponent,
    NoRecordFoundComponent,
    NoPageFoundComponent,
    HeaderComponent,
    LandingComponent,
    FormValidationMessagesComponent,
    LoginComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
