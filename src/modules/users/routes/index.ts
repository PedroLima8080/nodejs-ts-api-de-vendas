import { Router } from 'express';
import AvatarController from '../controllers/AvatarController';
import UsersController from '../controllers/UsersController';
import uploadConfig from '@config/upload';
import isAuthenticated from '../middlewares/isAuthenticated';
import multer from 'multer';
const upload = multer(uploadConfig);

const routes = Router();

routes.get('/', isAuthenticated, new UsersController().index);
routes.post('/', new UsersController().create);
routes.put('/avatar', isAuthenticated, upload.single('avatar'), new AvatarController().update);

export default routes;
