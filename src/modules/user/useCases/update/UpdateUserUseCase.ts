import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { UserRepository } from '../../repositories/implementations/UserRepository';

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}
  async execute({ id, name, email }: IUpdateUserDTO): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    await this.userRepository.update({ id, name, email });
  }
}
