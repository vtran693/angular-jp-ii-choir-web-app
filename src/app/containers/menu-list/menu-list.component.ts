import {Component, EventEmitter, OnInit} from "@angular/core";
import {IMenuState} from "../../store/states/menu.state";
import {Store} from "@ngrx/store";
import {MenuService} from "../../services/menu.service";
import {IMenu} from "../../models/menu.model";
import * as MenuActions from "../../store/actions/menu.action"


@Component({
    selector: '<menu-list>',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
  }
)
export class MenuListComponent implements OnInit{


  constructor(private menuReducers: Store<IMenuState>, private menuService: MenuService, private menuList: IMenu[], private selectedMenu: IMenu) {}

  ngOnInit(){
    this.menuReducers.select("selectedMenu").subscribe(
      (menu) => {
        this.selectedMenu = menu
        console.log('[MenuListComponent] Selected Menu value change: {}', this.selectedMenu)
      }
    );

    this.menuReducers.select("menuList").subscribe(
      (menuList) => {
        this.menuList = menuList
        console.log('[MenuListComponent] Menu List value change: {}', this.selectedMenu)
      }
    )
  }


  getMenuList(){
    this.menuList = this.menuService.getMenuList();
    this.menuReducers.dispatch(MenuActions.getMenuListSuccess(
      {payload: this.menuList}
      ));
  }
  clearMenuList(){
    this.menuReducers.dispatch(MenuActions.getMenuListSuccess(
      {payload: null}
    ));
  }

  updateSelectedMenu(selectedMenu: IMenu){
    this.menuReducers.dispatch(MenuActions.updateSelectedMenu({payload: selectedMenu}))
  }

}
