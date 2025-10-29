import { Pool } from 'pg';
// const { Pool } = require('pg');

const {
    INSTANCE_CONNECTION_NAME,
    DB_USER,
    DB_CATALOG,
    DB_PASSWORD,
    DB_PORT
} = process.env;

const pool = new Pool({
    host: `/cloudsql/${GCP_PROJECT_ID}:${DB_REGION}:${DB_INSTANCE}`, // nombre del servicio en docker-compose // ID_proyecto:REGION:INSTANCIA
    database: DB_CATALOG,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
});

// module.exports = pool;
export default pool;