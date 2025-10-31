import { User, UserSchema} from './user.models.js'

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
}

export default setupModels;