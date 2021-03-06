import { jwt } from '@config/auth';
import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader) throw new AppError('JWT faltando.');

    const [, token] = authHeader.split(' ');

    try {
        const decodeToken = verify(token, jwt.secret);
        const { sub } = decodeToken;

        req.user = {
            id: Number(sub),
        };

        return next();
    } catch (error) {
        throw new AppError('JWT inválido!');
    }
}
