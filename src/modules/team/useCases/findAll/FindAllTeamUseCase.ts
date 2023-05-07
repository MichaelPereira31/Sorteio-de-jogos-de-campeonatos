import { inject, injectable } from 'tsyringe';

import { ITeam } from '../../dtos/ITeam';
import { TeamRepository } from '../../repositories/implementations/TeamRepository';

@injectable()
export class FindAllTeamUseCase {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: TeamRepository,
  ) {}
  async execute(userId: string): Promise<ITeam[]> {
    const teams = await this.teamRepository.findAllTeams(userId);

    return teams;
  }
}
