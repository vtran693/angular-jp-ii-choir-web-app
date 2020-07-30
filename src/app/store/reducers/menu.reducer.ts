import {IMenuState, initialMenuState} from "../states/menu.state"
import * as MenuActions from '../actions/menu.action' ;
import {ActionReducer, createReducer, on} from "@ngrx/store";
import {IMenu} from "../../models/menu.model";



export const menuReducers: ActionReducer<IMenuState> = createReducer(initialMenuState,
  on(MenuActions.getMenuListSuccess, (state, {payload}) => {
    return {
      ...state,
      menuList: payload
    };
  }),
  on(MenuActions.updateSelectedMenu, (state, {payload}) => {
    return {
      ...state,
      selectedUser: payload
    }
  })
)
