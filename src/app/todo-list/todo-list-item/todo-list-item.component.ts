import { Component, Input } from '@angular/core';
import { TodoItem } from "../todo-list-state-management/models";
import { removeTodoItem } from "../todo-list-state-management/actions";
import { dispatch } from "@angular-redux/store";

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.less']
})
export class TodoListItemComponent {
  @Input()
  todo: TodoItem;

  @dispatch()
  removeTodo(todo: TodoItem) {
    return removeTodoItem(todo.id);
  }
}
