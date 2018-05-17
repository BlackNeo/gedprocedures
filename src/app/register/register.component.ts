import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
      $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
      $.getScript('../../assets/panel/js/sb-admin.js', function(){});
    }, 1000);
  }
}
