import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() todoItem: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
