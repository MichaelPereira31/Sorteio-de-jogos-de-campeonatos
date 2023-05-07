import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllTeamUseCase } from './FindAllTeamUseCase';

export class FindAllTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const findAllTeamUseCase = container.resolve(FindAllTeamUseCase);

    const teams = await findAllTeamUseCase.execute(userId);

    return response.status(200).json(teams);
  }
}
