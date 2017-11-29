import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavVisitorComponent } from './nav-visitor/nav-visitor.component';
import { NavUserComponent } from './nav-user/nav-user.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'nav-vistor', component: NavVisitorComponent},
  {path: 'nav-user', component: NavUserComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard-home', component: DashboardHomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'forget-password', component: ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
