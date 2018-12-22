import { TodoItem, TodoStatus } from "./models";
import { TodoActions, 
    AddTodoItemAction, 
    RemoveTodoItemAction, 
    GetTodosAction, 
    GetTodosSucceededAction, 
    ChangeTodoStatusAction,
    GetTodosFailedAction} from "./actions";
import todoConstants from "./constants";

export interface TodoListState {
    items: TodoItem[];
    status?: TodoStatus;
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
        case todoConstants.GET_TODOS_SUCCEEDED: {
            const getTodosSucceededAction = action as GetTodosSucceededAction;
            const items: TodoItem[] = getTodosSucceededAction.items

            const newState: TodoListState = {
                ...oldState,
                items,
                status: "idle"
            };

            return newState;
        }
        case todoConstants.CHANGE_TODO_STATUS: {
            const changeTodoStatusAction = action as ChangeTodoStatusAction;

            const newState: TodoListState = {
                ...oldState,
                status: changeTodoStatusAction.status
            };

            return newState;
        }
        case todoConstants.GET_TODOS_FAILED: {
            const getTodosFailedAction = action as GetTodosFailedAction;
            console.log(getTodosFailedAction.error);
            
            const newState: TodoListState = {
                ...oldState,
                status: "error"
            };

            return newState;
        }
        default: {
            return oldState;
        }
    }
}
