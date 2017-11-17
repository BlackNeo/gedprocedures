import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {



  @Input() users: Users;
  @Output() SelectUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(user: Users) {
    this.SelectUser.emit(user);
  }

}
