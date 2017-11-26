import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import '../../assets/panel/js/sb-admin-charts.js';
import { Input } from '@angular/core/src/metadata/directives';

declare var loadCtx: any;

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers : [UserService]
})
export class PanelComponent implements OnInit {

  ctx: any;
  users: Array<User>;
  selectedUser: User;
  isLogin: boolean;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.ctx = new loadCtx();
    this.isLogin = true;
    this._userService.getUsers()
      .subscribe(resUserData => this.users = resUserData);
  }

  onSelectUser(user: any) {
    this.selectedUser = user;
    this.isLogin = false;
    console.log(this.selectedUser);
  }
}
