// import dotenv from 'dotenv';
// dotenv.config();

const {
    DB_HOST,
    DB_USER,
    DB_CATALOG,
    DB_PASSWORD,
    DB_PORT,
    DB_DIALECT
} = process.env;

export default {
    username :  DB_USER,
    pass : DB_PASSWORD,
    database : DB_CATALOG,
    dialect : DB_DIALECT || 'postgres',
    port : DB_PORT,
    host : DB_HOST,
    loggin : false
};

