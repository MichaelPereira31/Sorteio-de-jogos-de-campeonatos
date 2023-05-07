import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdatePlayerDTO } from '../../dtos/IUpdatePlayerDTO';
import { PlayerRepository } from '../../repositories/implementations/PlayerRepository';

@injectable()
export class UpdatePlayerUseCase {
  constructor(
    @inject('PlayerRepository')
    private readonly playerRepository: PlayerRepository,
  ) {}
  async execute({
    age,
    height,
    id,
    name,
    number,
    photo,
    position,
    weight,
    userId,
  }: IUpdatePlayerDTO): Promise<void> {
    const player = await this.playerRepository.findById(id);

    if (!player) {
      throw new AppError('Player not found', 404);
    }

    await this.playerRepository.update({
      age,
      height,
      id,
      name,
      number,
      photo,
      position,
      weight,
      userId,
    });
  }
}
