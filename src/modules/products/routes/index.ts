import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const routes = Router();

routes.get('/', new ProductsController().index);
routes.post('/', new ProductsController().create);
routes.put('/:id', new ProductsController().update);
routes.delete('/:id', new ProductsController().delete);
routes.get('/:id', new ProductsController().show);

export default routes;
