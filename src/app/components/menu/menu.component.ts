import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IMenu} from "../../models/menu.model";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  constructor(@Input() private currentMenu : IMenu, @Output() private selectMenuEvent:EventEmitter<IMenu>) {
  }

  selectMenu(): void {
    this.selectMenuEvent.emit({
      id: this.currentMenu.id,
      item: this.currentMenu.item,
      price: this.currentMenu.price,
    });
  }
}
