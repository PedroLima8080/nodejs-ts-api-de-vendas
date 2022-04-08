import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import User from '../typeorm/entities/User';

class CreateUserService {
    public async execute(): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);

        return await userRepository.find();
    }
}

export default CreateUserService;
