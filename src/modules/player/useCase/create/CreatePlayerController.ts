import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePlayerUseCase } from './CreatePlayerUseCase';

export class CreatePlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { age, height, name, number, photo, position, weight, teamId } =
      request.body;
    const createPlayerUseCase = container.resolve(CreatePlayerUseCase);

    const player = await createPlayerUseCase.execute({
      age,
      height,
      teamId,
      name,
      number,
      photo,
      position,
      weight,
    });

    return response.status(201).json(player);
  }
}
