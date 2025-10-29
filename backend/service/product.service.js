import pool from '../libs/postgres.js';

export default class ProductsService {

    constructor(){
        this.products = [];

    }

    async find(){
        try {
            const result = await pool.query("SELECT codigo, nombre, presentacion, descripcion FROM productos");
            return ({ message: "Productos", rows: result.rows });
        } catch (err) {
            console.error(err);
            return ({ message: err || "Blank message" });
        }
    }

    findOne(){

    }


}