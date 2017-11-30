import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-safe-deposit-box',
  templateUrl: './safe-deposit-box.component.html',
  styleUrls: ['./safe-deposit-box.component.css']
})
export class SafeDepositBoxComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    $.getScript('../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/vendor/datatables/dataTables.js', function(){});
    $.getScript('../../assets/panel/vendor/datatables/dataTables.bootstrap4.js', function(){});
    $.getScript('../../assets/panel/vendor/chart.js/Chart.js', function(){});
    setTimeout(() => {
      $.getScript('../../assets/panel/js/sb-admin.js', function(){});
      $.getScript('../../assets/panel/js/sb-admin-datatables.js', function(){});
      $.getScript('../../assets/panel/js/sb-admin-charts.js', function(){});
    }, 1000);
  }
}
