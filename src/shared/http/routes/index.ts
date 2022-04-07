import { Router } from 'express';
import productRoutes from '@modules/products/routes';
import userRoutes from '@modules/users/routes';
import sessionRoutes from '@modules/users/routes/session.routes';

const routes = Router();
routes.use('/products', productRoutes);
routes.use('/users', userRoutes);
routes.use('/sessions', sessionRoutes);

export default routes;
