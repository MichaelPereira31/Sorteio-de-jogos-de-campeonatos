import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { UserRepository } from '../../../user/repositories/implementations/UserRepository';
import { TeamRepository } from '../../repositories/implementations/TeamRepository';

@injectable()
export class DeleteTeamUseCase {
  constructor(
    @inject('TeamRepository') private readonly teamRepository: TeamRepository,
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}
  async execute(id: string): Promise<void> {
    const team = await this.teamRepository.findById(id);

    if (!team) {
      throw new AppError('Team not found', 404);
    }

    await this.userRepository.delete(id);
  }
}
