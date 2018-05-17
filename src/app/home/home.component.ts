import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mailFormToJSON: string;
  userMail: any;
  mailStorageBeforeRedicrect: number;

  constructor( private _router: Router,
               private _sessionStorage: SessionStorageService ) { }

  ngOnInit() {
    this.userMail = '';
    this.mailStorageBeforeRedicrect = 0;
  }

  // ngAfterViewInit() {
  //   $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
  //   $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
  //   $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  // }

  submitForm(formMail: NgForm) {
    this.mailFormToJSON = JSON.stringify(formMail.value);
    this.userMail = JSON.parse(this.mailFormToJSON);
    this.userMail = this.userMail['email'];
    this._sessionStorage.store('mail', this.userMail);
    this.mailStorageBeforeRedicrect = 1;
    alert(this.userMail);
    console.log(this.userMail);
    if (this.mailStorageBeforeRedicrect === 0) {
      return null;
    } else if ( this.mailStorageBeforeRedicrect === 1) {
      this.mailStorageBeforeRedicrect = 0;
    }
  }
}
