import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTeamUseCase } from './CreateTeamUseCase';

export class CreateTeamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { city, name, nameLogo, site, trainer, srcLogo } = request.body;
    const { id } = request.user;
    // const { file } = request;

    // if (!file) {
    //   return response.status(400).json({ message: 'No files uploaded' });
    // }

    const createTeamUseCase = container.resolve(CreateTeamUseCase);

    const team = await createTeamUseCase.execute({
      city,
      name,
      nameLogo,
      site,
      srcLogo,
      trainer,
      userId: id,
    });

    return response.status(201).json(team);
  }
}
