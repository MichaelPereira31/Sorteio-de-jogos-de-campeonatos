/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { decrypt } from '../../../../shared/utils/decrypt';
import { IAuthenticateDTO } from '../../dtos/IAuthenticateDTO';
import { UserRepository } from '../../repositories/implementations/UserRepository';

@injectable()
export class AuthenticateUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  async execute({ password, email }: IAuthenticateDTO): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError(`User not found`, 404);
    }

    const decryptedPassword = decrypt(user.password);

    if (decryptedPassword !== password) {
      throw new AppError('Error authenticating', 401);
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY_TOKEN || '123456789',
      {
        expiresIn: '72h',
      },
    );

    return token;
  }
}
