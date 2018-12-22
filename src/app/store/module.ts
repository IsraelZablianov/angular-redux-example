import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { AppState } from './models';
import { rootReducer } from './reducers';
import { TodoEpics } from "../todo-list/todo-list-state-management/epics";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { environment } from "../../environments/environment";

const epicMiddleware = createEpicMiddleware();

const initialState: AppState = {
	todo: {
		items: [
			{
				description: "add redux today",
				id: "add redux today"
			},
			{
				description: "some another todo",
				id: "some another todo"
			},
			{
				description: "last one",
				id: "last one"
			}
		]
	},
	login: {
		credentials: {
		}
	}
};


@NgModule({
	imports: [NgReduxModule],
	providers: [
		TodoEpics
	]
})
export class StoreModule {
	constructor(private store: NgRedux<AppState>, private todoEpics: TodoEpics) {
		const rootEpic = combineEpics(
			...this.todoEpics.getEpics()
		);
		const middelwares = [epicMiddleware]
		const devMiddelwares = [...middelwares, createLogger()];
		const prodMiddelwares = [...middelwares];

		store.configureStore(
			rootReducer,
			initialState,
			environment.production ? prodMiddelwares : devMiddelwares);

		epicMiddleware.run(rootEpic)
	}
}
