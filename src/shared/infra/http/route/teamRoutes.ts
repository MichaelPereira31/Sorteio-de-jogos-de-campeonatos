import { Router } from 'express';

import { CreateTeamController } from '../../../../modules/team/useCases/create/CreateTeamController';
import { upload } from '../../../config/multer';

const teamRoutes = Router();

const createTeamController = new CreateTeamController();

teamRoutes.post('/', upload.single('file'), createTeamController.handle);

export { teamRoutes };
