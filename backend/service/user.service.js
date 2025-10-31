import models from '../libs/sequelize.js'

class UserService {
    constructor(){}

    async create(data){
        return data;
    }

    async findAll(){
        try{
            const resp = await models.user.findAll();
            return ({ message: "Consulta Usuarios", rows: resp.rows });
        }catch(err){
            return ({ message: err })
        }
    }
}

export default UserService;