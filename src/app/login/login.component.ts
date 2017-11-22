import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [UserService]
})
export class LoginComponent implements OnInit {

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

  submitForm(formLogin: NgForm) {
    this.userFormToJSON = JSON.stringify(formLogin.value);
    this.userLoged = JSON.parse(this.userFormToJSON);
    this._userService.getUsers()
     .subscribe(resUserData => this.users = resUserData);

    console.log(this.userLoged.username);
    for (let user of this.users) {
      if (user.username == this.userLoged.username && user.password == this.userLoged.password) {
        this.SelectUser.emit(user);
        this.isLogin = false;
        console.log(user);
      } else {
        this.isLogin = true;
        console.log('Password not matching');
      }
     }
  }
}

