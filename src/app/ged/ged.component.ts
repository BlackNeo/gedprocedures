import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
declare var $: any;

@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css'],
})
export class GedComponent implements OnInit, AfterViewInit {

  @Input() user: any[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('../../assets/panel/js/sb-admin-charts.js', function(){});
  }
}
