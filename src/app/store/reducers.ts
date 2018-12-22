import { combineReducers, Reducer } from 'redux';
import { AppState } from "./models";
import todoReducer from "../todo-list/todo-list-state-management/reducer";
import loginReducer from "../login/login-state-management/reducer";

// reducers together into a given structure.
export const rootReducer: Reducer<AppState> = combineReducers({
    todo: todoReducer,
    login: loginReducer
});
