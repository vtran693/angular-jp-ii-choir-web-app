import {Action, createAction, props} from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';


export enum EUserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success'
}

export const getUsers =  createAction(
  EUserActions.GetUsers
);

export const getUsersSuccess = createAction(
  EUserActions.GetUsersSuccess,
  props<{payload: IUser[]}>()
);

export const getUser = createAction(
  EUserActions.GetUser,
  props<{payload: number}>()
);

export const getUserSuccess = createAction(
  EUserActions.GetUserSuccess,
  props<{payload: IUser}>()
);

// export class GetUsers implements Action {
//     public readonly type = EUserActions.GetUsers;
// }
//
// export class GetUsersSuccess implements Action {
//     public readonly type = EUserActions.GetUsersSuccess;
//     constructor(public payload: IUser[]) {}
// }
//
// export class GetUser implements Action {
//     public readonly type = EUserActions.GetUser;
//     constructor(public payload: number) {}
// }
//
// export class GetUserSuccess implements Action {
//     public readonly type = EUserActions.GetUserSuccess;
//     constructor(public payload: IUser) {}
// }

// export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
