import { Sequelize } from 'sequelize';
import dbConfig from '../libs/configdb.js'
import setupModels from '../db/models/index.js'

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.pass,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectOptions: {
      // Requerido para Cloud SQL con sockets
      socketPath: dbConfig.host.startsWith('/cloudsql')
        ? dbConfig.host
        : undefined,
    },
    logging: dbConfig.loggin,
  }
);

setupModels(sequelize);

sequelize.sync();

export default sequelize;