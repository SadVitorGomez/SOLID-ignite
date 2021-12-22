import { Request, Response } from 'express';

import ListAllUsersUseCase from './ListAllUsersUseCase';

export default class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id: any = request.headers;

      const allUsers = this.listAllUsersUseCase.execute(user_id);

      return response.json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: 'Something went wrong!' });
    }
  }
}
