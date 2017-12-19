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

  users: any[];
  selectedUser: User;
  isLogin: boolean;
  userStorage: any;
  isLoginStorage: any;

  constructor(private _userService: UserService,
              private _sessionStorage: SessionStorageService) { }

  ngOnInit() {
    this.userStorage = this._sessionStorage.retrieve('user');
    this.isLoginStorage = this._sessionStorage.retrieve('isLogin');
    if (this.userStorage && this.isLoginStorage === false) {
      this.isLogin = false;
      this.selectedUser = this.userStorage;
      } else {
        this.isLogin = true;
    }
  }

  onSelectUser(user: any) {
    this.selectedUser = user.username;
    this.isLogin = false;
    this._sessionStorage.store('user', this.selectedUser);
    this._sessionStorage.store('isLogin', this.isLogin);
  }

  ngAfterViewInit() {
    // $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    // $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    // $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  }

}
