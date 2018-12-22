import { Injectable } from "@angular/core";
import { ofType, ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { Observable, of } from "rxjs";
import { Action } from "redux";
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { EpicMiddleware, AppState } from "../../store/models";
import { dispatch } from "@angular-redux/store";
import todoConstants from "./constants"
import { GetTodosAction, changeTodoStatus, getTodosFailed, getTodosSucceeded } from "./actions";
import { HttpClient } from "@angular/common/http";
import { GetTodosResponse } from "./models";

/**
 * example of side effects, if I needed some interaction with a server I would use epics.
 * Below is an example of epics with RxJS 6
 */

const BASE_URL = "https://some-server/api/";

@Injectable()
export class TodoEpics implements EpicMiddleware {

    constructor(private httpService: HttpClient) {
    }

    @dispatch()
    startLoading() {
        return changeTodoStatus("loading");
    }

    getTodosEpic = (action$: ActionsObservable<GetTodosAction>, state$: StateObservable<AppState>): Observable<Action> => {
        return action$.pipe(
            ofType(todoConstants.GET_TODOS),
            tap((action) => this.startLoading()),
            mergeMap(action => this.httpService.get<GetTodosResponse>(`${BASE_URL}/todos`).pipe(
                map((response) => getTodosSucceeded(response.items)),
                catchError(error => of(getTodosFailed(error)))
            ))
        );
    }

    getEpics(): Epic[] {
        return [
            this.getTodosEpic
        ];
    }
}