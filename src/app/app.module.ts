import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListModule } from "./todo-list/todo-list.module";
import { StoreModule } from "src/app/store/module";
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from "../app/login/login.module";
import { LoginComponent } from "../app/login/login.component";
import { TodoListComponent } from "../app/todo-list/todo-list/todo-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'todo', component: TodoListComponent },
      { path: '', component: LoginComponent },
      { path: '**', component: LoginComponent }
    ]),
    StoreModule,
    LoginModule,
    TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
