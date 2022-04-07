import { Router } from 'express';
import SessionController from '../controllers/SessionController';

const routes = Router();

routes.post('/', new SessionController().create);

export default routes;
