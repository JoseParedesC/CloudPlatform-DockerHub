import { Pool } from 'pg';
import dbConfig from './db.config.js'


const pool = new Pool({
    host: dbConfig.DB_HOST, // nombre del servicio en docker-compose // ID_proyecto:REGION:INSTANCIA
    database: dbConfig.DB_CATALOG,
    user: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
    port: dbConfig.DB_PORT
});

// module.exports = pool;
export default pool;