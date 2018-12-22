import { TodoListState } from "../todo-list/todo-list-state-management/reducer";
import { LoginState } from "../login/login-state-management/reducer";
import { Epic } from "redux-observable";

export interface AppState {
    todo: TodoListState;
    login: LoginState;
}


export interface EpicMiddleware {
    getEpics(): Epic[];
}
