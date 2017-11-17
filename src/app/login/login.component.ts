import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Input() users: Users;
  @Output() SelectUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(user: Users) {
    this.SelectUser.emit(user);
  }

}
