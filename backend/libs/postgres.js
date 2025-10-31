import { Pool } from 'pg';
// import dbConfig from '../libs/configdb.js'

const {
    DB_HOST,
    DB_USER,
    DB_CATALOG,
    DB_PASSWORD,
    DB_PORT,
    DB_DIALECT
} = process.env;

const pool = new Pool({
    host: DB_HOST, // nombre del servicio en docker-compose // ID_proyecto:REGION:INSTANCIA
    database: DB_CATALOG,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT
});

// module.exports = pool;
export default pool;