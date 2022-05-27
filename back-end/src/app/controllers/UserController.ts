import { Request, Response} from 'express'
import getRepository from 'typeorm'
import AuthDataSource from '../../database/data-sources/data-sourceAuth';

import User from '../models/SFM/User'

 class UserController {
    async store(req: Request, res: Response) {
        const repository = AuthDataSource.getRepository(User);
        const { email, password } = req.body;

        const userExists = await repository.findOne({where: { email }})
        
        if(userExists) {
            return res.sendStatus(409);
        }

        const user = repository.create({ email, password });
        await repository.save(user)

        return res.json(user);
    }

}



export default new UserController();