import { Router } from 'express';

import { CreateTeamController } from '../../../../modules/team/useCases/create/CreateTeamController';
import { DeleteTeamController } from '../../../../modules/team/useCases/delete/DeleteTeamController';
import { FindAllTeamController } from '../../../../modules/team/useCases/findAll/FindAllTeamController';
import { FindTeamAndPlayerController } from '../../../../modules/team/useCases/findTeamAndPlayer/FindTeamAndPlayerController';
import { UpdateTeamController } from '../../../../modules/team/useCases/update/UpdateTeamController';
import { upload } from '../../../config/multer';

const teamRoutes = Router();

const createTeamController = new CreateTeamController();
const findAllTeamsController = new FindAllTeamController();
const findTeamAndPlayersController = new FindTeamAndPlayerController();
const updateTeamsController = new UpdateTeamController();
const deleteTeamsController = new DeleteTeamController();

teamRoutes.get('/:userId', findAllTeamsController.handle);
teamRoutes.get('/name/:name', findTeamAndPlayersController.handle);
teamRoutes.post('/', upload.single('file'), createTeamController.handle);
teamRoutes.put('/:id', updateTeamsController.handle);
teamRoutes.delete('/:id', deleteTeamsController.handle);

export { teamRoutes };
