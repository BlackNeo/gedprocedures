import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SessionStorageService} from 'ngx-webstorage';
declare var $: any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, AfterViewInit {

  isLogin: boolean;

  constructor(private _sessionStorage: SessionStorageService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  }

  submitForm(formLogin: NgForm) {
    this.isLogin = false;
    this._sessionStorage.store('isLogin', this.isLogin);
    this._sessionStorage.clear('user');
  }

}
