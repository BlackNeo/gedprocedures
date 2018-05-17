import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
              '../../assets/home/vendor/bootstrap/css/bootstrap.min.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mailFormToJSON: string;
  userMail: any;
  storageOk: boolean;

  constructor( private _router: Router,
               private _sessionStorage: SessionStorageService ) { }

  ngOnInit() {
    this.userMail = '';
    this.storageOk = false;
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  }

  submitForm( formMail: NgForm ) {
    this.mailFormToJSON = JSON.stringify(formMail.value);
    this.userMail = JSON.parse(this.mailFormToJSON);
    this.userMail = this.userMail['email'];
    this._sessionStorage.store('mail', this.userMail);
    this.storageOk = true;
    alert(this.userMail);
    console.log(this.userMail);
    if ( !this.storageOk ) {
      this.storageOk = false;
      return null;
    } else if ( this.storageOk ) {
      this._router.navigate(['/s-inscrire']);
      this.storageOk = false;
    }
  }
}
