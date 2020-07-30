import {IMenu} from "../../models/menu.model";
import {IUserState} from "./user.state";

export interface IMenuState {
  menuList: IMenu[],
  selectedMenu: IMenu
}

export const initialMenuState: IMenuState = {
  menuList: null,
  selectedMenu: null
}
