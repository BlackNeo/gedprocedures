import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-statuts',
  templateUrl: './statuts.component.html',
  styleUrls: ['./statuts.component.css']
})
export class StatutsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('../../../node_modules/jquery/dist/jquery.min.js', function(){});
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    setTimeout(() => {
      $.getScript('../../assets/panel/vendor/datatables/jquery.dataTables.js', function(){});
      $.getScript('../../assets/panel/vendor/datatables/dataTables.bootstrap4.js', function(){});
    }, 500);
    setTimeout(() => {
      $.getScript('../../assets/panel/js/sb-admin.js', function(){});
      $.getScript('../../assets/panel/js/statuts-datatables.js', function(){});
    }, 1000);
  }
}
