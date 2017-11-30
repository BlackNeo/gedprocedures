import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { User } from '../user';
declare var $: any;

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit, AfterViewInit {

  @Input() user: User;

    constructor() { }
    ngOnInit() {
    }

    ngAfterViewInit() {
      $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
      $.getScript('../../assets/panel/vendor/chart.js/Chart.js', function(){});
      setTimeout(() => {
        $.getScript('../../assets/panel/js/sb-admin.js', function(){});
        $.getScript('../../assets/panel/js/dashboard-datatables.js', function(){});
        $.getScript('../../assets/panel/js/dashboard-charts.js', function(){});
      }, 1000);
    }

}
