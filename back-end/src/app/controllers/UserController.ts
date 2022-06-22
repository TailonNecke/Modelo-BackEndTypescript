import { Request, Response} from 'express'
import { storeService } from '../services/StoreService'

 class UserController {
    async store(req: Request, res: Response) {
        const { email, password } = req.body;
        storeService(email, password).then((data) => {
            
            if(data == false){
                return res.sendStatus(409);
            }else{
                return res.json(data);
            }

        })
    }

}



export default new UserController();