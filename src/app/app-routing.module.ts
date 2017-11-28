import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { GedComponent } from './ged/ged.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'login', component: LoginComponent},
  {path: 'geg', component: GedComponent},
  {path: 'nav', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
