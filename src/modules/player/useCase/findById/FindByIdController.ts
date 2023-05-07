import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdUseCase } from './FindByIdUseCase';

export class FindPlayerByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByIdUseCase = container.resolve(FindByIdUseCase);

    const player = await findByIdUseCase.execute(id);

    return response.status(200).json(player);
  }
}
