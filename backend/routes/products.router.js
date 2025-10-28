import express from "express";
// const { pool } = require('./libs/postgres.pool');
import ProductsService from "../service/product.service.js";

const router = express.Router();
const service = new ProductsService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json({ message: products.message, rows: products.rows });
});


// module.exports = router;
export default router;