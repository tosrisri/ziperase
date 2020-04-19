import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LpageComponent } from './lpage/lpage.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
  { path: 'lpage', component: LpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
