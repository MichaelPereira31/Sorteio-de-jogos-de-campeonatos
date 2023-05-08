import { Router } from 'express';

import { CreatePlayerController } from '../../../../modules/player/useCase/create/CreatePlayerController';
import { DeletePlayerController } from '../../../../modules/player/useCase/delete/DeletePlayerController';
import { FindPlayerByIdController } from '../../../../modules/player/useCase/findById/FindByIdController';
import { UpdatePlayerController } from '../../../../modules/player/useCase/update/UpdatePlayerController';
import { isAuthenticate } from '../middlewares/isAuthenticated';

const playerRoutes = Router();

const createPlayerController = new CreatePlayerController();
const deletePlayerController = new DeletePlayerController();
const findPlayerByIdController = new FindPlayerByIdController();
const updatePlayerController = new UpdatePlayerController();

playerRoutes.get('/:id', isAuthenticate, findPlayerByIdController.handle);
playerRoutes.post('/', isAuthenticate, createPlayerController.handle);
playerRoutes.put('/:id', isAuthenticate, updatePlayerController.handle);
playerRoutes.delete('/:id', isAuthenticate, deletePlayerController.handle);

export { playerRoutes };
