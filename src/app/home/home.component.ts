import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { Router, Routes } from '@angular/router';
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mailFormToJSON: string;
  userMail: any;
  // @Output() mailToRegister = new EventEmitter<any>();

  constructor( private _router: Router ) { }

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
    setTimeout(() => {
      this._router.navigate(['/s-inscrire']);
    }, 1000);
  }

}
