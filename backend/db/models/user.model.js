import { Model, DataTypes, Sequelize } from 'sequelize';

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    suerlogin: {
        allowNull: false,
        type: DataTypes.STRING
    }
}


class User extends Model {
    static associate(models){
        //models
    }

    static config(sequelize){
        return{
            sequelize,
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