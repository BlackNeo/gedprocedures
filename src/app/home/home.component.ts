import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mailFormToJSON: string;
  @Input() userMail: string;

  constructor( private _sessionStorage: SessionStorageService ) { }

  ngOnInit() {
    this.userMail = '';
  }

  submitForm(formMail: NgForm) {
    this.mailFormToJSON = JSON.stringify(formMail.value);
    this.userMail = JSON.parse(this.mailFormToJSON);
    this._sessionStorage.store('isLogin', this.userMail);
    console.log(this.mailFormToJSON);
  }

}
