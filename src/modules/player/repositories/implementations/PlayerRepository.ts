import { Player } from '../../../../../mongodb/schemas/Player';
import { ICreatePlayerDTO } from '../../dtos/ICreatePlayerDTO';
import { IPlayer } from '../../dtos/IPlayer';
import { IUpdatePlayerDTO } from '../../dtos/IUpdatePlayerDTO';
import { IPlayerRepository } from '../IPlayerRepository';

export class PlayerRepository implements IPlayerRepository {
  async findById(id: string): Promise<IPlayer | null> {
    const player = await Player.findById({ _id: id });

    return player;
  }

  async findAllPlayer(teamId: string): Promise<IPlayer[]> {
    const player = await Player.find({ teamId });

    return player;
  }

  async create({
    name,
    photo,
    height,
    teamId,
    weight,
    age,
    position,
    number,
  }: ICreatePlayerDTO): Promise<IPlayer> {
    const player = await Player.create({
      name,
      photo,
      height,
      weight,
      teamId,
      age,
      position,
      number,
    });

    return player;
  }

  async update({
    id,
    name,
    photo,
    height,
    weight,
    age,
    position,
    number,
  }: IUpdatePlayerDTO): Promise<void> {
    await Player.updateOne({
      _id: id,
      name,
      photo,
      height,
      weight,
      age,
      position,
      number,
    });
  }

  async delete(id: string): Promise<void> {
    await Player.deleteOne({ _id: id });
  }
}
