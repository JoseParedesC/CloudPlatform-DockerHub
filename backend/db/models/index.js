import { User, UserSchema } from './user.model.js'
import { Seller, SellerSchema } from './seller.model.js'
import { Client, ClientSchema } from './client.model.js'

export function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Seller.init(SellerSchema, Seller.config(sequelize));
    Client.init(ClientSchema, Client.config(sequelize));
}

