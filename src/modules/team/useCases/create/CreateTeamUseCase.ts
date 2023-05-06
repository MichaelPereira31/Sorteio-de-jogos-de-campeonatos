import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { ICreateTeamDTO } from '../../dtos/ICreateTeamDTO';
import { TeamRepository } from '../../repositories/implementations/TeamRepository';

@injectable()
export class CreateTeamUseCase {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: TeamRepository,
  ) {}
  async execute({
    city,
    name,
    nameLogo,
    site,
    srcLogo,
    trainer,
    userId,
  }: ICreateTeamDTO) {
    const teamAlreadyExists = await this.teamRepository.findByName(name);

    if (teamAlreadyExists) {
      throw new AppError('Team already exists', 404);
    }

    const team = await this.teamRepository.create({
      city,
      name,
      nameLogo,
      site,
      srcLogo,
      trainer,
      userId,
    });

    return team;
  }
}
