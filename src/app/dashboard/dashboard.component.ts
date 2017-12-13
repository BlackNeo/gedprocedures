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
      alert('this.isLogin = false;');
      this._userService.getUsers()
        .subscribe(resUserData => this.users = resUserData);
      alert(this.users);  
      for (const user of this.users) {
        alert('for (const user of this.users)');
       if (user.username === this.userStorage) {
           this.selectedUser = user;
           alert('I got my user');
          }
        }
      } else {
        this.isLogin = true;
    }
    this._userService.getUsers()
      .subscribe(resUserData => this.users = resUserData);
  }

  onSelectUser(user: any) {
    this.selectedUser = user;
    this._sessionStorage.store('user', this.selectedUser.username);
    this.isLogin = false;
    this._sessionStorage.store('isLogin', this.isLogin);
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  }

}
