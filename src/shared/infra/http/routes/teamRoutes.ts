import { Router } from 'express';

import { CreateTeamController } from '../../../../modules/team/useCases/create/CreateTeamController';
import { DeleteTeamController } from '../../../../modules/team/useCases/delete/DeleteTeamController';
import { FindAllTeamController } from '../../../../modules/team/useCases/findAll/FindAllTeamController';
import { FindTeamAndPlayerController } from '../../../../modules/team/useCases/findTeamAndPlayer/FindTeamAndPlayerController';
import { PrizeDrawController } from '../../../../modules/team/useCases/prizeDraw/PrizeDrawController';
import { UpdateTeamController } from '../../../../modules/team/useCases/update/UpdateTeamController';
import { isAuthenticate } from '../middlewares/isAuthenticated';

const teamRoutes = Router();
const createTeamController = new CreateTeamController();
const findAllTeamsController = new FindAllTeamController();
const findTeamAndPlayersController = new FindTeamAndPlayerController();
const updateTeamsController = new UpdateTeamController();
const deleteTeamsController = new DeleteTeamController();
const prizeDrawController = new PrizeDrawController();

teamRoutes.get('/', isAuthenticate, findAllTeamsController.handle);
teamRoutes.get('/prize', isAuthenticate, prizeDrawController.handle);
teamRoutes.get(
  '/name/:name',
  isAuthenticate,
  findTeamAndPlayersController.handle,
);
teamRoutes.post('/', isAuthenticate, createTeamController.handle);
teamRoutes.put('/', isAuthenticate, updateTeamsController.handle);
teamRoutes.delete('/', isAuthenticate, deleteTeamsController.handle);

export { teamRoutes };
