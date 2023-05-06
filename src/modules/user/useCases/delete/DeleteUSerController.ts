import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserUseCase } from './DeleteUserUSeCase';

export class DeleteUSerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserController = container.resolve(DeleteUserUseCase);

    await deleteUserController.execute(id);

    return response.status(200).json({ message: 'deleted successfully' });
  }
}
