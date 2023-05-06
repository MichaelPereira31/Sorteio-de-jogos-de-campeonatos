import { Router } from 'express';

import { teamRoutes } from './teamRoutes';
import { userRoutes } from './userRoutes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/team', teamRoutes);

export { routes };
