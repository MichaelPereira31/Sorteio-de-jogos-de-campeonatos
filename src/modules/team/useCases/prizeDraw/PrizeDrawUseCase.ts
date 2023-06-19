/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { PlayerRepository } from '../../../player/repositories/implementations/PlayerRepository';
import { TeamRepository } from '../../repositories/implementations/TeamRepository';

@injectable()
export class PrizeDrawUseCase {
  constructor(
    @inject('TeamRepository')
    private readonly teamRepository: TeamRepository,
    @inject('PlayerRepository')
    private readonly playerRepository: PlayerRepository,
  ) {}
  async execute(userId: string): Promise<string[][]> {
    const teams = await this.teamRepository.findAllTeams(userId);

    if (teams.length < 4) {
      throw new AppError('need to register new teams');
    }

    const teamsList = await Promise.all(
      teams.map(async team => {
        try {
          const players = await this.playerRepository.findAllPlayer(userId);

          // if (players.length < 22) {
          //   return new AppError(
          //     `need to register more players in the team${team.name}`,
          //   );
          // }
          return team.name;
        } catch (e) {
          throw new AppError(e.message);
        }
      }),
    );

    const drawResult: string[][] = [];
    const limitTeams = teams.length;

    for (let k = 0; k < limitTeams / 2; k++) {
      const prizeDraw: string[] = [];
      for (let i = 0; i < 2; i++) {
        const indexSorteado = Math.floor(Math.random() * teamsList.length);
        prizeDraw.push(teamsList[indexSorteado] as string);
        teamsList.splice(indexSorteado, 1);
      }
      drawResult.push(prizeDraw);
    }

    return drawResult;
  }
}
