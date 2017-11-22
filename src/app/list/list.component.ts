import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() user: any[];
  @Input() users: any[];
  @Output() SelectUser = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  onSelect(user: User) {
    this.SelectUser.emit(user);
  }
}
