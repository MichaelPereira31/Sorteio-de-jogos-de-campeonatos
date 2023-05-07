import { container } from 'tsyringe';

import { PlayerRepository } from '../../modules/player/repositories/implementations/PlayerRepository';
import { IPlayerRepository } from '../../modules/player/repositories/IPlayerRepository';
import { TeamRepository } from '../../modules/team/repositories/implementations/TeamRepository';
import { ITeamRepository } from '../../modules/team/repositories/ITeamRepository';
import { UserRepository } from '../../modules/user/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository);
container.registerSingleton<IPlayerRepository>(
  'PlayerRepository',
  PlayerRepository,
);
