import { Action } from "redux";
import { UserCredentials } from "./models";
import constants from "./constants";

export interface LoginAction extends Action {
    credentials: UserCredentials;
}

export function login(credentials): LoginAction {
    return {
        credentials,
        type: constants.LOGIN
    }
}

export type LoginActions = LoginAction;