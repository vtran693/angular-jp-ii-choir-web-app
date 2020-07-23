import { RouterReducerState } from '@ngrx/router-store';
import { initialUserState, IUserState } from './user.state';
import { initialConfigState, IConfigState } from './config.state';

export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config?: IConfigState;
}

export const initialAppState: IAppState = {
    users: initialUserState
}

export function getInitialState(): IAppState {
    return this.initialAppState;
}
