import { LoginActions } from "./actions";
import { UserCredentials } from "./models";
import constants from "./constants";
 
export interface LoginState {
    credentials: UserCredentials;
}

export default function loginReducer(oldState: LoginState = {} as any, action: LoginActions) {
    switch (action.type) {
        case constants.LOGIN: {
            return {
                ...oldState,
                credentials: action.credentials
            } as LoginState;       
        }
        default: {
            return oldState;
        }
    }
}