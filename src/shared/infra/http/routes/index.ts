import { Router } from 'express';

import { playerRoutes } from './playerRoutes';
import { teamRoutes } from './teamRoutes';
import { userRoutes } from './userRoutes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/player', playerRoutes);
routes.use('/team', teamRoutes);

export { routes };
