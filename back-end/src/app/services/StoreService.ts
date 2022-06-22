import AuthDataSource from '../../database/data-sources/data-sourceAuth';

import User from '../models/Auth/User'

export async function storeService(email: string, password: string){
    const repository = AuthDataSource.getRepository(User);
    

    const userExists = await repository.createQueryBuilder("A")
    .where("A.email = :email", {email: email});

    
    if(userExists) {
        return false;
    }

    const user = repository.create({ email, password });
    await repository.save(user)

    return user
}