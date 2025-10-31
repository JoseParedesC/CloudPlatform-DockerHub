import express from "express";
// const { pool } = require('./libs/postgres.pool');
import pool from '../libs/postgres.js';
import ServiceVentas from "../service/ventas.service.js";

const router = express.Router();
const service = new ServiceVentas();

router.get("/", async (req, res) => {
  const ventas = await service.find();
  res.json({ message: ventas.message, rows: ventas.rows});
});

router.get("/ventas_details", async (req, res) => {
  const ventas = await service.findDetail();
  res.json({ message: ventas.message, rows: ventas.rows});
});

router.get("/ventas_details/:codigo_factura", async (req, res) => {
  // const { codigo_factura } = req.query;
  const { codigo_factura } = req.params;
  const ventas = await service.findDetailByFactura(codigo_factura);

  res.json({ message: ventas.message, rows: ventas.rows})
});

router.get("/ventas_items/:codigo_factura", async (req, res) => {
  // const { codigo_factura } = req.query;
  const { codigo_factura } = req.params;
  const ventas = await service.findFacturasByCode(codigo_factura);

  res.json({ message: ventas.message, rows: ventas.rows})
});

// module.exports = router;
export default router;