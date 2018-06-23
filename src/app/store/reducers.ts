import { combineReducers, Reducer } from 'redux';
import { AppState } from "src/app/store/models";
import todoReducer from "src/app/todo-list/reducer";
import loginReducer from "src/app/login/reducer";

// reducers together into a given structure.
export const rootReducer: Reducer<AppState> = combineReducers({
    todo: todoReducer,
    login: loginReducer
});
