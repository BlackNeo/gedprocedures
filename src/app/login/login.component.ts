import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { Users } from '../users';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Md5]
})
export class LoginComponent implements OnInit, OnChanges {

  protected signIn = false;
  @Input() user: Users;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.signIn = false;
  }

  onsignIn() {
    this.signIn = true;
  }
}
