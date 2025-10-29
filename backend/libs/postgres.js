import { Pool } from 'pg';
// const { Pool } = require('pg');

const {
    DB_HOST,
    DB_USER,
    DB_CATALOG,
    DB_PASSWORD,
    DB_PORT
} = process.env;

const pool = new Pool({
    host: DB_HOST, // nombre del servicio en docker-compose // ID_proyecto:REGION:INSTANCIA
    database: DB_CATALOG,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
});

// module.exports = pool;
export default pool;