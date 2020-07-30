import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { appReducers } from '../../store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import {IUser} from "../../models/user.model";
import {IUserState} from "../../store/states/user.state";
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appReducers: Store<IUserState>, private users: IUser[], private selectedUser: IUser ) {

  }

  ngOnInit(): void {
    this.appReducers.select('users').subscribe(
      (users) => {
        this.users = users;
        console.log('[HomeComponent] users list change: {}', this.users);
    });

    this.appReducers.select('selectedUser').subscribe(
      (user) => {
        this.selectedUser = user;
        console.log('[HomeComponent] Selected User change: {}', this.selectedUser);
      }
    )

  }


}
