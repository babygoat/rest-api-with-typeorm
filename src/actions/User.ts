import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {User} from '../entity/User';


export async function userAdd(request: Request, response: Response) {
  const userRepository = getManager().getRepository(User);

  const newUser = userRepository.create(request.body);

  await userRepository.save(newUser);

  response.send(newUser);
}

export async function userGetAll(req: Request, res: Response) {
  const userRepository = getManager().getRepository(User);
  
  const users: User[] = await userRepository.find();
  
  if (0 == users.length) {
    res.status(204);
    res.end();
    return;
  }

  res.send(users);
}

export async function userGetById(req: Request, res: Response) {
  const userRepository = getManager().getRepository(User);
  
  const user: User = await userRepository.findOne(req.params.id);

  if (!user) {
    res.status(404);
    res.end();
    return;
  }

  res.send(user)
}
