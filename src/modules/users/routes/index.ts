import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import isAuthenticated from '../middlewares/isAuthenticated';

const routes = Router();

routes.get('/', isAuthenticated, new UsersController().index);
routes.post('/', new UsersController().create);

export default routes;
