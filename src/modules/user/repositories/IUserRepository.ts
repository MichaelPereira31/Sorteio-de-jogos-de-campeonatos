import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUpdatePasswordDTO } from '../dtos/IUpdatePasswordDTO';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import { IUser } from '../dtos/IUser';

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
  create(params: ICreateUserDTO): Promise<IUser>;
  update(params: IUpdateUserDTO): Promise<void>;
  updatePassword(params: IUpdatePasswordDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
