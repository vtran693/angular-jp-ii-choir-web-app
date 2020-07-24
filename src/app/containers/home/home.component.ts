import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { appReducers } from '../../store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import {IUser} from "../../models/user.model";
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appReducers: Store<any>, private members: IUser[] ) {

  }

  ngOnInit(): void {
    this.appReducers.select('users').subscribe(  (users) => {
      this.members = users.users;
      console.log('[HomeComponent] members', this.members);
    });

  }


}
