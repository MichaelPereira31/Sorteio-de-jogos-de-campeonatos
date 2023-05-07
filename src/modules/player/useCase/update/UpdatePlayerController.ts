import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePlayerUseCase } from './UpdatePlayerUseCase';

export class UpdatePlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { age, height, name, number, photo, position, weight, userId } =
      request.body;

    const updatePlayerUseCase = container.resolve(UpdatePlayerUseCase);

    await updatePlayerUseCase.execute({
      id,
      age,
      height,
      name,
      number,
      photo,
      position,
      weight,
      userId,
    });

    return response
      .status(200)
      .json({ message: 'Players updated successfully' });
  }
}
