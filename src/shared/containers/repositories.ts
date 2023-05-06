import { container } from 'tsyringe';

import { TeamRepository } from '../../modules/team/repositories/implementations/TeamRepository';
import { ITeamRepository } from '../../modules/team/repositories/ITeamRepository';
import { UserRepository } from '../../modules/user/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository);
