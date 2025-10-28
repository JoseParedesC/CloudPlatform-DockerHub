import { Pool } from 'pg';
// const { Pool } = require('pg');

const {
    PROJECT_ID,
    REGION,
    INSTANCE,
    USER_DATABASE,
    CATALOG,
    PASS_DATABASE,
    PORT_DATABASE
} = process.env;

const pool = new Pool({
    host: `/cloudsql/${PROJECT_ID}:${REGION}:${INSTANCE}`, // nombre del servicio en docker-compose // ID_proyecto:REGION:INSTANCIA
    database: CATALOG,
    user: USER_DATABASE,
    password: PASS_DATABASE,
    port: PORT_DATABASE,
});

// module.exports = pool;
export default pool;