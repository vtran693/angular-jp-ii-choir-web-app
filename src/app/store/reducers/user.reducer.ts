import { initialUserState, IUserState } from "../states/user.state"
import * as UserActions from '../actions/user.action' ;
import {createReducer, on} from "@ngrx/store";

// export const userReducers = (state: IUserState = initialUserState, action: UserActions): IUserState => {
//
//     switch (action.type) {
//         case EUserActions.GetUsersSuccess: {
//             return {
//                 ...state,
//                 users: action.payload
//             };
//         }
//         case EUserActions.GetUserSuccess: {
//             return {
//                 ...state,
//                 selectedUser: action.payload
//             }
//         }
//         default:
//             return state;
//     }
// }

export const userReducers = createReducer(initialUserState,
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
