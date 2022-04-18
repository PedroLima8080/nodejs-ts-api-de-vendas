import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import UserTokenRepository from '../typeorm/repositories/UserTokenRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
    email: string;
}

class SendForgoutPasswordEmailService {
    public async execute({ email }: IRequest): Promise<void> {
        const userRepository = getCustomRepository(UserRepository);
        const userTokensRepository = getCustomRepository(UserTokenRepository);

        const user = await userRepository.findByEmail(email);

        if (!user) throw new AppError('Usuário não existe');

        const token = await userTokensRepository.generate(user.id);

        console.log(token);
    }
}

export default SendForgoutPasswordEmailService;
