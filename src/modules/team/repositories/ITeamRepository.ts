import { ICreateTeamDTO } from '../dtos/ICreateTeamDTO';
import { ITeam } from '../dtos/ITeam';
import { IUpdateTeamDTO } from '../dtos/IUpdateTeamDTO';

export interface ITeamRepository {
  findById(id: string): Promise<ITeam | null>;
  findByName(name: string): Promise<ITeam | null>;
  findAllTeams(userId: string): Promise<ITeam[]>;
  create(params: ICreateTeamDTO): Promise<ITeam>;
  update(params: IUpdateTeamDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
