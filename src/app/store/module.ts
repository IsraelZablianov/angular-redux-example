import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { AppState } from './models';
import { rootReducer } from './reducers';

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
  imports: [NgReduxModule]
})
export class StoreModule {
  constructor(public store: NgRedux<AppState>, devTools: DevToolsExtension) {
    store.configureStore(
      rootReducer,
      initialState,
      [ createLogger()],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
