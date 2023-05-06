import { injectable, inject } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { encrypt } from '../../../../shared/utils/encrypt';
import { IUpdatePasswordDTO } from '../../dtos/IUpdatePasswordDTO';
import { UserRepository } from '../../repositories/implementations/UserRepository';

@injectable()
export class UpdatePasswordUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}
  async execute({ id, password }: IUpdatePasswordDTO): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const encryptedPassword = encrypt(password);

    await this.userRepository.updatePassword({
      id,
      password: encryptedPassword,
    });
  }
}
