import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from "@angular/forms";
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoListComponent,
    TodoListItemComponent
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoListModule { }
