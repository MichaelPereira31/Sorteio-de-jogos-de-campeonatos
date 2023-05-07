import { Team } from '../../../../../mongodb/schemas/Team';
import { ICreateTeamDTO } from '../../dtos/ICreateTeamDTO';
import { ITeam } from '../../dtos/ITeam';
import { IUpdateTeamDTO } from '../../dtos/IUpdateTeamDTO';
import { ITeamRepository } from '../ITeamRepository';

export class TeamRepository implements ITeamRepository {
  async findById(id: string): Promise<ITeam | null> {
    const team = await Team.findById({ _id: id });

    return team;
  }
  async findByName(name: string): Promise<ITeam | null> {
    const team = await Team.findOne({ name });

    return team;
  }

  async findAllTeams(userId: string): Promise<ITeam[]> {
    const teams = await Team.find({ userId });

    return teams;
  }

  async create({
    city,
    name,
    nameLogo,
    site,
    srcLogo,
    trainer,
    userId,
  }: ICreateTeamDTO): Promise<ITeam> {
    const team = await Team.create({
      city,
      name,
      nameLogo,
      site,
      srcLogo,
      trainer,
      userId,
    });

    return team;
  }

  async update({
    id,
    city,
    name,
    nameLogo,
    site,
    srcLogo,
    userId,
    trainer,
  }: IUpdateTeamDTO): Promise<void> {
    await Team.updateOne({
      _id: id,
      city,
      name,
      userId,
      nameLogo,
      site,
      srcLogo,
      trainer,
    });
  }
  async delete(id: string): Promise<void> {
    await Team.deleteOne({ id });
  }
}
