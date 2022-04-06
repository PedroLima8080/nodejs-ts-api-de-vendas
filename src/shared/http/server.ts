import 'reflect-metadata';

import express, { NextFunction, Request, response, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message, status: 'Error' });
    }

    return response.status(500).json({ message: 'Ocorreu um erro inesperado', status: 'Error' });
});

app.listen(3000);
