import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {User} from '../entity/User';

export async function userAdd(request: Request, response: Response) {
  const userRepository = getManager().getRepository(User);

  const newUser = userRepository.create(request.body);

  await userRepository.save(newUser);

  response.send(newUser);
}
