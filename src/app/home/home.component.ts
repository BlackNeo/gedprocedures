import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlPrefix = 'ged';

  signUpFormToJSON: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm(formHomeSignUp: NgForm) {
    this.signUpFormToJSON = JSON.stringify(formHomeSignUp.value);
    console.log(this.signUpFormToJSON);
  }
}
