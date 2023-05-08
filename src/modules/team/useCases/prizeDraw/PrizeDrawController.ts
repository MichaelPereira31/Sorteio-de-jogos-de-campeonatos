import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { PrizeDrawUseCase } from './PrizeDrawUseCase';

export class PrizeDrawController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const prizeDrawUsecase = container.resolve(PrizeDrawUseCase);

    const t = await prizeDrawUsecase.execute(id);

    return response.status(200).json(t);
  }
}
