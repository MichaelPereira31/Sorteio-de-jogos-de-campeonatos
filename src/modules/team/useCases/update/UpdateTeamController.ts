import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTeamUseCase } from './UpdateTeamUseCase';

export class UpdateTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { city, name, nameLogo, site, srcLogo, trainer, userId } =
      request.body;

    const updateTeamUseCase = container.resolve(UpdateTeamUseCase);

    await updateTeamUseCase.execute({
      id,
      city,
      name,
      nameLogo,
      site,
      srcLogo,
      trainer,
      userId,
    });

    return response.status(200).json({ message: 'team updated successfully' });
  }
}
