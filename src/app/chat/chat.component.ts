import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/js/sb-admin.js', function(){});
  }
}
