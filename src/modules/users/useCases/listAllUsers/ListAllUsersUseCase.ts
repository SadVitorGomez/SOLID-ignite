import User from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

export default class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user.admin === false) {
      throw new Error(`You have not permissions to *list all users*`);
    }

    const users = this.usersRepository.list();

    return users;
  }
}
