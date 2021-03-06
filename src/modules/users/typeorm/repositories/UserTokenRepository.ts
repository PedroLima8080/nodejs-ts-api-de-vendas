import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';
import uuid from 'uuid/';

@EntityRepository(UserToken)
class UserTokenRepository extends Repository<UserToken> {
    public async findByToken(token: string): Promise<UserToken | undefined> {
        const userToken = await this.findOne({
            where: {
                token,
            },
        });

        return userToken;
    }
    public async generate(user_id: number): Promise<UserToken | undefined> {
        const userToken = await this.create({
            user_id,
            token: uuid.v4(),
        });

        await this.save(userToken);

        return userToken;
    }
}

export default UserTokenRepository;
