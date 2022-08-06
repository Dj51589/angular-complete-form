import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/common/error/error.component';
import { NoPageFoundComponent } from './components/common/no-page-found/no-page-found.component';
import { SuccessComponent } from './components/common/success/success.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { StatementsComponent } from './components/statements/statements.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'login',   component: LoginComponent},
  { path: 'home', component: LandingComponent, canActivate: [AuthGuard] },
  { path: 'statements', component: StatementsComponent, canActivate: [AuthGuard] },
  { path: 'success', component: SuccessComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent, canActivate: [AuthGuard] },
  { path: 'transferfunds', component: TransferFundComponent, canActivate: [AuthGuard] },
  { path: '',   component: LandingComponent, canActivate: [AuthGuard]},
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
