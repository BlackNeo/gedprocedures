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
  mailStorageCheck: any;

  constructor( private _router: Router,
               private _sessionStorage: SessionStorageService ) { }

  ngOnInit() {
    this.userMail = '';
  }

  // ngAfterViewInit() {
  //   $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
  //   $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
  //   $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  // }

  submitForm(formMail: NgForm) {
    alert(formMail.value);
    this.mailFormToJSON = JSON.stringify(formMail.value);
    this.userMail = JSON.parse(this.mailFormToJSON);
    this._sessionStorage.store('mail', this.userMail);
    console.log(formMail.value);
  }

  onSubmit(formMail: NgForm) {
    this._router.navigate(['/s-inscrire']);
  }

}
