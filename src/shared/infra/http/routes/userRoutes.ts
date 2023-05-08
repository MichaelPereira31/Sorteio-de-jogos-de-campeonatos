import { Router } from 'express';

import { AuthenticateController } from '../../../../modules/user/useCases/authenticate/AuthenticateController';
import { CreateUserController } from '../../../../modules/user/useCases/create/CreateUserController';
import { DeleteUSerController } from '../../../../modules/user/useCases/delete/DeleteUSerController';
import { FindByIdController } from '../../../../modules/user/useCases/findById/FindByIdController';
import { UpdateUserController } from '../../../../modules/user/useCases/update/UpdateUserController';
import { UpdatePasswordController } from '../../../../modules/user/useCases/updatePassword/UpdatePasswordController';
import { isAuthenticate } from '../middlewares/isAuthenticated';

const userRoutes = Router();

const findUserByIdController = new FindByIdController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateController();
const updateUserController = new UpdateUserController();
const updatePasswordUserController = new UpdatePasswordController();
const deleteUserController = new DeleteUSerController();

userRoutes.get('/', isAuthenticate, findUserByIdController.handle);
userRoutes.post('/', createUserController.handle);
userRoutes.post('/authenticate', authenticateUserController.handle);
userRoutes.put('/', isAuthenticate, updateUserController.handle);
userRoutes.put(
  '/password/',
  isAuthenticate,
  updatePasswordUserController.handle,
);
userRoutes.delete('/', isAuthenticate, deleteUserController.handle);

export { userRoutes };
