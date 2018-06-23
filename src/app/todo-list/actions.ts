
import { Action } from "redux";
import { TodoItem } from "src/app/models";
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

export type TodoActions = AddTodoItemAction |
    RemoveTodoItemAction;
