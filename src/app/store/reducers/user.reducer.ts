import {initialUserState, IUserState} from "../states/user.state"
import * as UserActions from '../actions/user.action' ;
import {ActionReducer, createReducer, on} from "@ngrx/store";

export const userReducers: ActionReducer<IUserState> = createReducer(initialUserState,
  on(UserActions.getUsersSuccess, (state, {payload}) => {
    return {
      ...state,
      users: payload
    };
  }),
  on(UserActions.getUserSuccess, (state, {payload}) => {
    return {
      ...state,
      selectedUser: payload
    }
  })
)
