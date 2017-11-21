import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpModule } from '@angular/http';

import { Md5 } from 'ts-md5/dist/md5';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { PanelComponent } from './panel/panel.component';
import { SafePipe } from './safe.pipe';
import { ToMd5Pipe } from './to-md5.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    PanelComponent,
    SafePipe,
    ToMd5Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule
  ],
  providers: [Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
