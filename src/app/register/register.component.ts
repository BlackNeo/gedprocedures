import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SessionStorageService, SessionStorage } from 'ngx-webstorage';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userMail: any;

  constructor( private _storage: SessionStorageService ) { }

  ngOnInit() {
    this.userMail = this._storage.retrieve('email');
  }

  submitForm( formRegister: NgForm ) {
    alert('Get Form Register');
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
  //     $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
  //     $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  //   }, 1000);
  // }
}
