import { Component, OnInit, Input, EventEmitter, Output, OnChanges, AfterViewInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [UserService]
})
export class LoginComponent implements OnInit, AfterViewInit {

  @Input() users: any[];
  @Output() SelectUser = new EventEmitter<any>();

  isLogin: boolean;
  userFormToJSON: string;

  userLoged: User = { _id: '', username: '', password: ''};
  user: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.user = { _id: '', username: '', password: ''};
    this.isLogin = true;
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  }

  submitForm(formLogin: NgForm) {
    this.userFormToJSON = JSON.stringify(formLogin.value);
    this.userLoged = JSON.parse(this.userFormToJSON);
    this._userService.getUsers()
     .subscribe(resUserData => this.users = resUserData);

    console.log(this.userLoged.username);
    for (const user of this.users) {
      if (user.username === this.userLoged.username) {
        if (user.password === this.userLoged.password) {
          this.SelectUser.emit(user);
          console.log('User loged : ' + user);
          this.isLogin = true;
        } else {
            this.isLogin = false;
            console.log('Password not matching');
          }
      } else {
        this.isLogin = false;
        console.log('User not matching');
      }
     }
  }
}

