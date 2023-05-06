import { ICreateTeamDTO } from '../dtos/ICreateTeamDTO';
import { ITeam } from '../dtos/ITeam';

export interface ITeamRepository {
  findByName(name: string): Promise<ITeam | null>;
  findAllTeams(userId: string): Promise<ITeam[]>;
  create(params: ICreateTeamDTO): Promise<ITeam>;
}
