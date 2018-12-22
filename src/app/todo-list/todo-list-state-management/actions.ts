
import { Action } from "redux";
import { TodoItem, TodoStatus } from "./models";
import todoConstants from "./constants";

export interface AddTodoItemAction extends Action {
    item: TodoItem;
}

export function addTodoItem(item: TodoItem): AddTodoItemAction {
    return {
        type: todoConstants.ADD_TODO_ITEM,
        item
    };
}

export interface RemoveTodoItemAction extends Action {
    id: string;
}

export function removeTodoItem(id: string): RemoveTodoItemAction {
    return {
        type: todoConstants.REMOVE_TODO_ITEM,
        id
    };
}

export interface GetTodosAction extends Action {
}

export function getTodos(): GetTodosAction {
    return {
        type: todoConstants.GET_TODOS
    };
}

export interface GetTodosSucceededAction extends Action {
    items: TodoItem[];
}

export function getTodosSucceeded(items: TodoItem[]): GetTodosSucceededAction {
    return {
        type: todoConstants.GET_TODOS_SUCCEEDED,
        items
    };
}

export interface GetTodosFailedAction extends Action {
    error: any;
}

export function getTodosFailed(error: any): GetTodosFailedAction {
    return {
        type: todoConstants.GET_TODOS_FAILED,
        error
    };
}

export interface ChangeTodoStatusAction extends Action {
    status: TodoStatus;
}

export function changeTodoStatus(status: TodoStatus): ChangeTodoStatusAction {
    return {
        type: todoConstants.CHANGE_TODO_STATUS,
        status
    };
}

export type TodoActions = AddTodoItemAction 
    | RemoveTodoItemAction 
    | GetTodosAction
    | GetTodosSucceededAction
    | GetTodosFailedAction
    | ChangeTodoStatusAction;
