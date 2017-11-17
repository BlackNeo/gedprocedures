import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  users: Users [] = [
    {'_id': '00001', 'username': 'zerosum1', 'password': '12341'},
    {'_id': '00002', 'username': 'zerosum2', 'password': '12342'},
    {'_id': '00003', 'username': 'zerosum3', 'password': '12343'}
  ];

  selectedUser: Users;

  constructor() { }

  ngOnInit() {
  }

  onSelectUser(user: any) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
}
