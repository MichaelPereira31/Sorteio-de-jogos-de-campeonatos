import { Router } from 'express';

import { CreatePlayerController } from '../../../../modules/player/useCase/create/CreatePlayerController';
import { DeletePlayerController } from '../../../../modules/player/useCase/delete/DeletePlayerController';
import { FindPlayerByIdController } from '../../../../modules/player/useCase/findById/FindByIdController';
import { UpdatePlayerController } from '../../../../modules/player/useCase/update/UpdatePlayerController';

const playerRoutes = Router();

const createPlayerController = new CreatePlayerController();
const deletePlayerController = new DeletePlayerController();
const findPlayerByIdController = new FindPlayerByIdController();
const updatePlayerController = new UpdatePlayerController();

playerRoutes.get('/:id', findPlayerByIdController.handle);
playerRoutes.post('/', createPlayerController.handle);
playerRoutes.put('/:id', updatePlayerController.handle);
playerRoutes.delete('/:id', deletePlayerController.handle);

export { playerRoutes };
