import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  private signIn = false;
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
