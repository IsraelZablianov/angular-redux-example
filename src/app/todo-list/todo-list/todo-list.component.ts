import { Component, OnInit } from '@angular/core';
import { TodoItem } from "../todo-list-state-management/models";
import { addTodoItem } from "../todo-list-state-management/actions";
import { dispatch, select } from "@angular-redux/store";
import { AppState } from "../../store/models";
import { Observable } from "rxjs";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  public newTodo: TodoItem = this.getEmptyTodoItem();
  todos: TodoItem[] = [];

  @select((appState: AppState) => appState.todo.items)
  todos$: Observable<TodoItem[]>;

  @select((appState: AppState) => appState.login.credentials.username)
  name$: Observable<string>
  
  ngOnInit(): void {
    this.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  @dispatch()
  public addTodo() {
    const newTodo = {
      ...this.newTodo
    };

    this.newTodo = this.getEmptyTodoItem();
    return addTodoItem(newTodo);
  }

  getEmptyTodoItem(): TodoItem {
    return {
      description: ""
    };
  }
}
