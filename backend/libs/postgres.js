import { Pool } from 'pg';
import dbConfig from '../libs/configdb.js'

const pool = new Pool({
    host: dbConfig.host, // nombre del servicio en docker-compose // ID_proyecto:REGION:INSTANCIA
    database: dbConfig.database,
    user: dbConfig.username,
    password: dbConfig.pass,
    port: dbConfig.port
});

// module.exports = pool;
export default pool;