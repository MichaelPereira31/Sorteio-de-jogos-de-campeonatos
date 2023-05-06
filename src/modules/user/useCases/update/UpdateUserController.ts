import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    console.log('user');

    const user = await updateUserUseCase.execute({ id, name, email });

    return response.status(200).json(user);
  }
}
