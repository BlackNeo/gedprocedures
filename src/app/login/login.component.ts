import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../users';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Md5]
})
export class LoginComponent implements OnInit {


  @Input() users: Users;
  @Output() SelectUser = new EventEmitter<any>();

  protected signIn = false;
  @Input() user: Users;
  constructor() { }

  ngOnInit() {
  }

  onSelect(user: Users) {
    this.SelectUser.emit(user);
  }

}
