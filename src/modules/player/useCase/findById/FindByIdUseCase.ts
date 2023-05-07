import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IPlayer } from '../../dtos/IPlayer';
import { IPlayerRepository } from '../../repositories/IPlayerRepository';

@injectable()
export class FindByIdUseCase {
  constructor(
    @inject('PlayerRepository')
    private readonly playerRepository: IPlayerRepository,
  ) {}

  async execute(id: string): Promise<IPlayer> {
    const player = await this.playerRepository.findById(id);

    if (!player) {
      throw new AppError('Player not found', 404);
    }

    return player;
  }
}
