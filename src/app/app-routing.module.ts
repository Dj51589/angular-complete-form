import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './components/common/no-page-found/no-page-found.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { ListingComponent } from './components/listing/listing.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'login',   component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'listing', component: ListingComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: '',   component: LandingComponent, canActivate: [AuthGuard]},
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
