import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';

class UsersController {
    public async index(req: Request, res: Response): Promise<Response> {
        const users = await new ListUserService().execute();
        return res.json(users);
    }
    public async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;
        const user = await new CreateUserService().execute({ name, email, password });
        return res.json(user);
    }
}

export default UsersController;
