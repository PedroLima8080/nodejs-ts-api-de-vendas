import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { jwt } from '@config/auth';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: User;
    token: string | undefined;
}

class CreateSessionService {
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findByEmail(email);
        if (!user) throw new AppError('Incorrect email/password combination.', 401);

        const passwordConfirmed = await compare(password, user.password);
        if (!passwordConfirmed) throw new AppError('Incorrect email/password combination.', 401);
        const token = sign({ id: user.id }, jwt.secret, {
            subject: `${user.id}`,
            expiresIn: jwt.expiresIn,
        });

        return { user, token };
    }
}

export default CreateSessionService;
