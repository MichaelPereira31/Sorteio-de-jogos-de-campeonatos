import { Team } from '../../../../../mongodb/schemas/Team';
import { ICreateTeamDTO } from '../../dtos/ICreateTeamDTO';
import { ITeam } from '../../dtos/ITeam';
import { ITeamRepository } from '../ITeamRepository';

export class TeamRepository implements ITeamRepository {
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
}
