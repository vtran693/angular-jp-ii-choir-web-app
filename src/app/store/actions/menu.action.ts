import {createAction, props} from "@ngrx/store";
import {IMenu} from "../../models/menu.model";


export enum EMenuActions {
  GetMenuList = '[Menu] Get Menu List',
  GetMenuListSuccess = '[User] Get Get Menu List Success',
  UpdateSelectedMenu = '[Menu] Get Menu',
  GetMenuSuccess = '[User] Get Menu Success'
}


export const getMenuList =  createAction(
  EMenuActions.GetMenuList
)

export const getMenuListSuccess = createAction (
  EMenuActions.GetMenuListSuccess,
  props<{payload: IMenu[]}>()
)

export const updateSelectedMenu = createAction (
  EMenuActions.UpdateSelectedMenu,
  props<{payload: IMenu}>()
)

export const getMenuSuccess = createAction (
  EMenuActions.GetMenuSuccess,
  props<{payload: IMenu}>()
)
