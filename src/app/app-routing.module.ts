import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './components/common/no-page-found/no-page-found.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { ListingComponent } from './components/listing/listing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '',   component: LandingComponent},
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
