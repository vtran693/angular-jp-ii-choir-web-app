import { Injectable } from '@angular/core';
import {IUser} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  memberListMock: IUser[] = [
    {
      id: 1,
      firstName: 'Viet',
      lastName: 'Tran',
      email: 'viet.tran@capitalone.com'
    },
    {
      id: 2,
      firstName: 'Nu',
      lastName: 'Nguyen',
      email: 'nu.nguyen@capitalone.com'
    },
    {
      id: 3,
      firstName: 'Ha',
      lastName: 'Hoang',
      email: 'ha.hoang@capitalone.com'
    }
  ]

  constructor() { }

  ngOnInit(){

  }

  getAllMembers = (): IUser[]  => this.memberListMock ;





}
