import { User } from '../../../../../mongodb/schemas/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUpdatePasswordDTO } from '../../dtos/IUpdatePasswordDTO';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { IUser } from '../../dtos/IUser';
import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<IUser | null> {
    const user = await User.findById({ _id: id });

    return user;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email });

    return user;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<IUser> {
    const user = await User.create({ name, email, password });

    return user;
  }

  async update({ id, name, email }: IUpdateUserDTO): Promise<void> {
    await User.updateOne({ _id: id, name, email });
  }

  async updatePassword({ id, password }: IUpdatePasswordDTO): Promise<void> {
    await User.updateOne({ _id: id, password });
  }

  async delete(id: string): Promise<void> {
    await User.deleteOne({ _id: id });
  }
}
