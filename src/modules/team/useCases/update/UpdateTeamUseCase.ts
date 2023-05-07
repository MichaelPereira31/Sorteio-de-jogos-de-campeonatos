import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { UserRepository } from '../../../user/repositories/implementations/UserRepository';
import { IUpdateTeamDTO } from '../../dtos/IUpdateTeamDTO';
import { TeamRepository } from '../../repositories/implementations/TeamRepository';

@injectable()
export class UpdateTeamUseCase {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: TeamRepository,
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}
  async execute({
    id,
    city,
    name,
    nameLogo,
    site,
    srcLogo,
    trainer,
    userId,
  }: IUpdateTeamDTO): Promise<void> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const team = await this.teamRepository.findById(id);

    if (!team) {
      throw new AppError('Team not found', 404);
    }

    await this.teamRepository.update({
      id,
      city,
      name,
      nameLogo,
      site,
      srcLogo,
      trainer,
      userId,
    });
  }
}
