import {Injectable} from "@angular/core";
import {IMenu} from "../models/menu.model";


@Injectable( {
    providedIn: 'root'
})
export class MenuService {

  constructor(private readonly menuListMock: IMenu[]) {
     this.menuListMock = [
       {
         id: 1,
         item: 'Ice Cream',
         price: 3
       },
       {
         id: 2,
         item: 'Pho Soup',
         price: 10
       },
       {
         id: 3,
         item: 'Sashimi Combo',
         price: 20
       },
     ]
  }

  getMenuList(): IMenu[] {
    return this.menuListMock
  }

}
