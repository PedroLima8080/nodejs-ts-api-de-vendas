import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const emailAlreadyExists = await userRepository.findByEmail(email);
        if (emailAlreadyExists) {
            throw new AppError('Email já está em uso');
        }

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: hashedPassword,
        });
        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;
