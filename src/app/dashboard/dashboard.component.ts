import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import {SessionStorageService} from 'ngx-webstorage';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [UserService]
})
export class DashboardComponent implements OnInit, AfterViewInit {

  users: Array<User>;
  selectedUser: User;
  isLogin: boolean;
  user: any;
  isLoginStorage: any;

  constructor(private _userService: UserService,
              private _sessionStorage: SessionStorageService) { }

  ngOnInit() {
    if (this.isLoginStorage) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    this._userService.getUsers()
      .subscribe(resUserData => this.users = resUserData);
  }

  onSelectUser(user: any) {
    this.selectedUser = user;
    this.user = this._sessionStorage.store('user', this.selectedUser.username);
    this.isLogin = false;
    this.isLoginStorage = this._sessionStorage.store('isLogin', this.isLogin);
    console.log('User loged :' + this.selectedUser.username);
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  }

}
