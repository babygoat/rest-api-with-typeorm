import {userAdd} from '../actions/User';

export const userRoutes = [
  {
    path: '/users',
    method: 'post',
    action: userAdd,
  },
]
