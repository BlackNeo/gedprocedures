import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/vendor/chart.js/Chart.js', function(){});
    setTimeout(() => {
      $.getScript('../../assets/panel/js/sb-admin.js', function(){});
      $.getScript('../../assets/panel/js/process-charts.js', function(){});
    }, 1000);
  }
}
