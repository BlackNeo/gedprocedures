import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signUpFormToJSON: string;
  signUpUser: any;

  constructor() { }

  ngOnInit() {
    this.signUpUser = { usermail: ''}
  }

  submitForm(formHomeSignUp: NgForm) {
    this.signUpFormToJSON = JSON.stringify(formHomeSignUp.value);
    console.log(this.signUpFormToJSON);
  }

}
