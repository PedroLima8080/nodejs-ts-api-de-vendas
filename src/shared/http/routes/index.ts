import { Router } from 'express';
import productRoutes from '@modules/products/routes';

const routes = Router();
routes.use('/products', productRoutes);

export default routes;
