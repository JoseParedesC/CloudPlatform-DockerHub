import { Model, DataTypes, Sequelize } from 'sequelize'

const CLIENT_TABLE = 'clients'

const ClientSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nombres: {
        allowNull: false,
        type: DataTypes.STRING
    },
    apellidos: {
        allowNull: false,
        type: DataTypes.STRING
    }
}


class Client extends Model {
    static asociate(){
        //models
    }

    static config(sequelize){
        return {
            sequelize, //El parametro se llama igual que el argumento
            tableName: CLIENT_TABLE,
            modelName: 'client',
            timestamp: false
        }
    }
}

export {
    ClientSchema, 
    Client
}