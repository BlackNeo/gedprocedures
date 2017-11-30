import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavVisitorComponent } from './nav-visitor/nav-visitor.component';
import { NavUserComponent } from './nav-user/nav-user.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfilComponent } from './profil/profil.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { SafeDepositBoxComponent } from './safe-deposit-box/safe-deposit-box.component';


@NgModule({
  declarations: [
    AppComponent,
    NavVisitorComponent,
    NavUserComponent,
    HomeComponent,
    DashboardComponent,
    DashboardHomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProfilComponent,
    LogoutComponent,
    FooterComponent,
    SafeDepositBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
