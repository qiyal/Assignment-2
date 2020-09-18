import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() todo = new EventEmitter<Todo>();
  id = 3;
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.text && this.text.trim()) {
      this.todo.emit(new Todo(this.id++, this.text.trim()));
      this.text = '';
      // alert('New Todo created!');
    }
  }

}
