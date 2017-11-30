import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('../../assets/panel/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('../../assets/panel/vendor/chart.js/Chart.js', function(){});
    setTimeout(() => {
      $.getScript('../../assets/panel/js/sb-admin.js', function(){});
    }, 1000);
  }
}
