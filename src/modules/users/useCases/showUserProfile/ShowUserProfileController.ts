import { Request, Response } from 'express';

import ShowUserProfileUseCase from './ShowUserProfileUseCase';

export default class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const listUser = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(listUser);
    } catch (error) {
      return response.status(404).json({ error: 'Something went wrong!' });
    }
  }
}
