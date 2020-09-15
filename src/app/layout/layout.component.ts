import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  todoItems: Todo[] = [
    new Todo(2, 'First item'),
    new Todo(1, 'Second item'),
    new Todo(0, 'Third Item')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateTodoList(newTodo: Todo) {
    this.todoItems.unshift(newTodo);
  }
}
