import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { User } from '../user';
import { } from '@angular/core/src/metadata/lifecycle_hooks';
declare var $: any;

@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css'],
})
export class GedComponent implements OnInit, AfterViewInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/vendor/chart.js/Chart.js', function(){});
    setTimeout(() => {
      $.getScript('../../assets/panel/js/sb-admin.js', function(){});
      $.getScript('../../assets/panel/js/sb-admin-charts.js', function(){});
    }, 1000);
  }
}
