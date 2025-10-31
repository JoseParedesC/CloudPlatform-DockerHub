import { Sequelize } from 'sequelize';
import dbConfig from './db.config.js'

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectOptions: {
      // Requerido para Cloud SQL con sockets
      socketPath: dbConfig.host
    },
    logging: dbConfig.loggin,
  }
);


export default sequelize;