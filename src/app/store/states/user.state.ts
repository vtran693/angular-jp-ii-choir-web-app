import { IUser } from 'src/app/models/user.model';

let memberListMock: IUser[] = [
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

export interface IUserState {
    users: IUser[];
    selectedUser: IUser;
}

export const initialUserState: IUserState = {
    users: memberListMock,
    selectedUser: null
}
