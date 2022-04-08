import 'reflect-metadata';
import 'express-async-errors';

import express, { NextFunction, Request, response, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import upload from '@config/upload';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/files', express.static(upload.directory));

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message, status: 'Error' });
    }

    return res.status(500).json({ message: 'Ocorreu um erro inesperado ', status: 'Error' });
});

app.listen(3000);
