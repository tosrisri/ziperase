import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponentsComponent } from './bootstrap-components/bootstrap-components.component';
import { LoginComponent } from './login/login.component';
import { LpageComponent } from './lpage/lpage.component';
import { HttpClientModule } from '@angular/common/Http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ToastsComponent } from './toasts/toasts.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponentsComponent,
    LoginComponent,
    LpageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UserProfileComponent,
    ToastsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
