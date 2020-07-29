import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {IUser} from "../../models/user.model";


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  constructor(private store:Store<any>, private users: IUser[], private currentSelectedUser: IUser) {
  }

  ngOnInit(){
    this.store.select('users').subscribe(
      users => {
        this.users = users;
        console.log('[HomeComponent] usrs', this.users);
      },
      error => console.log(error)
    );
    this.store.select('selectedUser').subscribe(
      currentSelectedUser => this.currentSelectedUser = currentSelectedUser,
      error => console.log(error)
    );
  }
}
