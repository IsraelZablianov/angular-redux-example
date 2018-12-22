# Angular Redux Example

This is a POC project to learn how redux is integrated with Angular and RxJs.</br>
todo style based on https://github.com/sitepoint-editors/angular-todo-app 

### How to use redux with Angular
lets start with some installation

```console
npm install redux --save
npm install @angular-redux/store@^9 --save // for angular 6 or ^7 for angular 5
npm install redux-observable --save

```

## Store
Create a folder called store, this will be the main module for initializing redux. <br />
Here is the store module:

```ts
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

```
`store.configureStore` receiving 3 params: <br />
    1. root reducer <br />
    2. initial state <br />
    3. middlewares <br />

the `rootReducer` is a simple object, imported from `reducers.ts` file: <br />

```ts
import { combineReducers, Reducer } from 'redux';
import { AppState } from "./models";
import todoReducer from "../todo-list/todo-list-state-management/reducer";
import loginReducer from "../login/login-state-management/reducer";

// reducers together into a given structure.
export const rootReducer: Reducer<AppState> = combineReducers({
    todo: todoReducer,
    login: loginReducer
});

```
