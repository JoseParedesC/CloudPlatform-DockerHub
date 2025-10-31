import pool from '../libs/postgres.js';
import sequelize from '../libs/sequelize.js';

export default class ServiceVentas{

    async find(){
        try {
            const result = await pool.query("SELECT * FROM ventas");
            return ({ message: "Resultado de Consulta", rows: result.rows });
        } catch (err) {
            console.error(err);
            return ({ message: err });
        }
    }

    async findDetail(){
        try {
            const result = await pool.query(`
            SELECT codigo_factura
                , vendedor
                , nombre
                , presentacion
                , descripcion
                , cantidad
                , precio_unitario
                , subtotal 
            FROM ventas_items 
                INNER JOIN productos ON productos.id = ventas_items.id_producto 
                INNER JOIN ventas ON ventas.id = ventas_items.id_venta`);
            return ({ message: "Resultado de Consulta detalle", rows: result.rows });
        } catch (err) {
            console.error(err);
            return ({ message: err });
        }
    }

    async findDetailByFactura(codigo_factura){
        try {
            const result = await pool.query(`
            SELECT codigo_factura
                , vendedor
                , nombre
                , presentacion
                , descripcion
                , cantidad
                , precio_unitario
                , subtotal 
            FROM ventas_items 
                INNER JOIN productos ON productos.id = ventas_items.id_producto 
                INNER JOIN ventas ON ventas.id = ventas_items.id_venta
            WHERE ventas.codigo_factura = '${codigo_factura}'`);
            return ({ message: "Resultado de Consulta detalle by Factura", rows: result.rows });
        } catch (err) {
            // res.json({ message: err });
            // res.end(err.toString());
            console.error(err);
            return ({ message: err });
        }

    }

    async findFacturasByCode(codigo_factura="FAC-001"){
        try{
            const query = `SELECT * FROM ventas WHERE ventas.codigo_factura = '${codigo_factura}'`
            const [data, metadata] = await sequelize.query(query);
            return ({ message : "Consulta Factura por Codigo", data, metadata});
        }catch(err){
            console.log(err)
            return ({ messagge: err });
        }
    }

    
}