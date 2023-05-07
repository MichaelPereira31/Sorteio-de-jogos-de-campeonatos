import { ICreatePlayerDTO } from '../dtos/ICreatePlayerDTO';
import { IPlayer } from '../dtos/IPlayer';
import { IUpdatePlayerDTO } from '../dtos/IUpdatePlayerDTO';

export interface IPlayerRepository {
  findById(id: string): Promise<IPlayer | null>;
  findAllPlayer(userId: string): Promise<IPlayer[]>;
  create(params: ICreatePlayerDTO): Promise<IPlayer>;
  update(params: IUpdatePlayerDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
