import { Component, OnInit, Input, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mailFormToJSON: string;
  @Input() userMail: any;
  // @Output() mailToRegister = new EventEmitter<any>();

  constructor( private _sessionStorage: SessionStorageService ) { }

  ngOnInit() {
    this.userMail = '';
  }

  // ngAfterViewInit() {
  //   $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
  //   $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
  //   $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  // }

  submitForm(formMail: NgForm) {
    // this.mailFormToJSON = JSON.stringify(formMail.value);
    // this.userMail = JSON.parse(this.mailFormToJSON);
    // // this._sessionStorage.store('mail', this.userMail);
    // this.mailToRegister.emit(this.userMail);
    alert(formMail.value);
    console.log(formMail.value);
  }

}
