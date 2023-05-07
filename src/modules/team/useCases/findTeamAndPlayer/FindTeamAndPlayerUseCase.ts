import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { PlayerRepository } from '../../../player/repositories/implementations/PlayerRepository';
import { TeamRepository } from '../../repositories/implementations/TeamRepository';

@injectable()
export class FindTeamAndPlayerUseCase {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: TeamRepository,
    @inject('PlayerRepository')
    private readonly playerRepository: PlayerRepository,
  ) {}
  async execute(name: string): Promise<any> {
    const team = await this.teamRepository.findByName(name);

    if (!team) {
      throw new AppError('Team not found', 404);
    }

    const players = await this.playerRepository.findAllPlayer(team.userId);

    return { team, players };
  }
}
