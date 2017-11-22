import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css'],
})
export class GedComponent implements OnInit {

  @Input() user: any[];

  constructor() { }

  ngOnInit() {
  }

}
