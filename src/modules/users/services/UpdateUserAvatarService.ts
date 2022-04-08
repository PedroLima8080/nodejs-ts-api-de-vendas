import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import path from 'path';
import upload from '@config/upload';
import fs from 'fs';

interface IRequest {
    user_id: number;
    avatarFilename: string;
}

class UpdateUserAvatarService {
    public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findById(user_id);
        if (!user) throw new AppError('Usuário não encontrado!');

        if (user.avatar) {
            const userAvatarFilePath = path.join(upload.directory, user.avatar);
            const fileExists = await fs.promises.stat(userAvatarFilePath);

            if (fileExists) await fs.promises.unlink(userAvatarFilePath);
        }

        user.avatar = avatarFilename;
        await userRepository.save(user);
        return user;
    }
}

export default UpdateUserAvatarService;
