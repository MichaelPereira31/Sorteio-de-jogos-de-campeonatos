import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUser } from '../../dtos/IUser';
import { UserRepository } from '../../repositories/implementations/UserRepository';

@injectable()
export class FindByIdUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}
  async execute(id: string): Promise<IUser> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
}
