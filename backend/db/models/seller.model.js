import { Model, DataTypes, Sequelize } from 'sequelize';

const SELLER_TABLE = 'Sellers'

const SellerSchema = {
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


class Seller extends Model {
    static asociate(){
        //models
    }

    static config(conn){
        return {
            conn,
            tableName: SELLER_TABLE,
            modelName: 'Seller',
            timestamp: false
        }
    }
}

export {
    SellerSchema,
    Seller
}