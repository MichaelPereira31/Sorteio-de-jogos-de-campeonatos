import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { encrypt } from '../../../../shared/utils/encrypt';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUser } from '../../dtos/IUser';
import { UserRepository } from '../../repositories/implementations/UserRepository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}
  async execute({ name, email, password }: ICreateUserDTO): Promise<IUser> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists', 409);
    }

    const encryptedPassword = encrypt(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: encryptedPassword,
    });

    return user;
  }
}
