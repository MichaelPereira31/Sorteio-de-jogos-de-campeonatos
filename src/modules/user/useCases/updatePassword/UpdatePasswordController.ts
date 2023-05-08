import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePasswordUseCase } from './UpdatePasswordUseCase';

export class UpdatePasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { password } = request.body;

    const updatePasswordUseCase = container.resolve(UpdatePasswordUseCase);

    await updatePasswordUseCase.execute({ id, password });

    return response
      .status(200)
      .json({ message: 'Password updated successfully' });
  }
}
