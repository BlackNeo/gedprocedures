import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { User } from '../user';
declare var $: any;

@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css']
})
export class GedComponent implements OnInit, AfterViewInit  {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('../../assets/panel/js/sb-admin-charts.js', function(){});
  }

}
