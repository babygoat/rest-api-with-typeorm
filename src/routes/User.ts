import {userAdd, userGetAll, userGetById} from '../actions/User';

export const userRoutes = [
  {
    path: '/users',
    method: 'post',
    action: userAdd,
  },
  {
    path: '/users',
    method: 'get',
    action: userGetAll,
  },
  {
    path: '/users/:id',
    method: 'get',
    action: userGetById
  },
]
