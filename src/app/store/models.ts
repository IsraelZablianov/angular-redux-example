import { TodoListState } from "src/app/todo-list/reducer";
import { LoginState } from "src/app/login/reducer";

export interface AppState {
    todo: TodoListState;
    login: LoginState;
}
