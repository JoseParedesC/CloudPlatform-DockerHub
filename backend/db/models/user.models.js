import { Model, DataTypes, Sequelize } from 'sequelize';

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        allowNull : false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    }
}


class User extends Model {

    static associate(){
        //models
    }

    static config(conn){
        return{
            conn,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamp: false
        }
    }

}

export {
    USER_TABLE,
    UserSchema,
    User
}