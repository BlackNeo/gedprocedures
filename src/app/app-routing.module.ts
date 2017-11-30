import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavVisitorComponent } from './nav-visitor/nav-visitor.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { ProfilComponent } from './profil/profil.component';
import { SafeDepositBoxComponent } from './safe-deposit-box/safe-deposit-box.component';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'nav-vistor', component: NavVisitorComponent},
  {path: 'nav-user', component: NavUserComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard-home', component: DashboardHomeComponent},
  {path: 'se-connecter', component: LoginComponent},
  {path: 'se-deconnecter', component: LogoutComponent},
  {path: 's-inscrire', component: RegisterComponent},
  {path: 'renouveler-mot-de-passe', component: ResetPasswordComponent},
  {path: 'mot-de-passe-oublie', component: ForgetPasswordComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'coffre', component: SafeDepositBoxComponent},
  {path: 'procedures', component: ProcessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
