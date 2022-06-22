import AuthDataSource from '../../database/data-sources/data-sourceAuth';

import User from '../models/STORE/User'

export async function storeService(email: string, password: string){
    const repository = AuthDataSource.getRepository(User);
    

    const userExists = await repository.findOne({where: { email }})
    
    if(userExists) {
        return false;
    }

    const user = repository.create({ email, password });
    await repository.save(user)

    return user
}