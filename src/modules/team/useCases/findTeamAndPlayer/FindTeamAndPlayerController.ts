import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindTeamAndPlayerUseCase } from './FindTeamAndPlayerUseCase';

export class FindTeamAndPlayerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const findTeamAndPlayerUseCase = container.resolve(
      FindTeamAndPlayerUseCase,
    );

    const teamAndPlayers = await findTeamAndPlayerUseCase.execute(name);

    return response.status(200).json(teamAndPlayers);
  }
}
