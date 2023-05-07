import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUserRepository } from '../../../user/repositories/IUserRepository';
import { ICreatePlayerDTO } from '../../dtos/ICreatePlayerDTO';
import { IPlayerRepository } from '../../repositories/IPlayerRepository';

@injectable()
export class CreatePlayerUseCase {
  constructor(
    @inject('PlayerRepository')
    private readonly playerRepository: IPlayerRepository,
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}
  async execute({
    age,
    height,
    teamId,
    name,
    number,
    photo,
    position,
    weight,
    userId,
  }: ICreatePlayerDTO) {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const player = await this.playerRepository.create({
      age,
      height,
      name,
      number,
      teamId,
      photo,
      position,
      weight,
      userId,
    });

    return player;
  }
}
