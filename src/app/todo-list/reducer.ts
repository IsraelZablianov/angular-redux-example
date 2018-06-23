import { TodoItem } from "src/app/models";
import { TodoActions, AddTodoItemAction, RemoveTodoItemAction } from "src/app/todo-list/actions";
import todoConstants from "./constants";

export interface TodoListState {
    items: TodoItem[];
}

export default function todoReducer(oldState: TodoListState = {} as any, action: TodoActions): TodoListState {
    switch (action.type) {
        case todoConstants.ADD_TODO_ITEM: {
            const addAction = action as AddTodoItemAction;
            
            const newItem = addAction.item;
            newItem.id = newItem.description;

            const newState: TodoListState = {
                ...oldState,
                items: [...oldState.items, newItem]
            };

            return newState;
        }
        case todoConstants.REMOVE_TODO_ITEM: {
            const removeAction = action as RemoveTodoItemAction;
            const items: TodoItem[] = oldState.items.filter((item) => item.id !== removeAction.id);

            const newState: TodoListState = {
                ...oldState,
                items
            };

            return newState;
        }
        default: {
            return oldState;
        }
    }
}
