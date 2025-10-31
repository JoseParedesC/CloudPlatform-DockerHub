import models from '../libs/sequelize.js'

class UserService {
    constructor(){}

    async create(data){
        return data;
    }

    async findAll(){
        const resp = await models.User.findAll();
        return resp;
    }
}

export default UserService;