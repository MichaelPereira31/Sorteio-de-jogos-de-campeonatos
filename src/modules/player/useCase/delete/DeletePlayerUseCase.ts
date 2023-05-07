import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { PlayerRepository } from '../../repositories/implementations/PlayerRepository';

@injectable()
export class DeletePlayerUseCase {
  constructor(
    @inject('PlayerRepository')
    private readonly playerRepository: PlayerRepository,
  ) {}
  async execute(id: string): Promise<void> {
    const user = await this.playerRepository.findById(id);

    if (!user) {
      throw new AppError('Player not found', 404);
    }

    await this.playerRepository.delete(id);
  }
}
