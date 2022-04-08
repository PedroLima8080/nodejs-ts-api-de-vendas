import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import path from 'path';
import fs from 'fs';
import upload from '@config/upload';

class AvatarController {
    public async update(req: Request, res: Response): Promise<Response> {
        const user = await new UpdateUserAvatarService().execute({ user_id: req.user.id, avatarFilename: req.file && req.file.filename ? req.file.filename : '' });
        return res.json(user);
    }
}

export default AvatarController;
