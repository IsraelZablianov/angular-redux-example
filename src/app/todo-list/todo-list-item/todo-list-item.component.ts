import { Component, Input } from '@angular/core';
import { TodoItem } from "src/app/models";
import { removeTodoItem } from "src/app/todo-list/actions";
import { dispatch } from "@angular-redux/store";

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input()
  todo: TodoItem;

  @dispatch()
  removeTodo(todo: TodoItem) {
    return removeTodoItem(todo.id);
  }
}
