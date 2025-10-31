import express from "express";
// const { pool } = require('./libs/postgres.pool');
import ProductsService from "../service/product.service.js";

const router = express.Router();
const service = new ProductsService();

router.get("/", async (req, res) => {
  try{
    const products = await service.find();
    res.json({ message: products.message, rows: products.rows });
  }
  catch (err) {
    next(err);
  }
});

router.get("/ManyProducts", async (req, res, next) => {
  try{
    const products = await service.findMany();
    res.json({ message: products.message, rows: products.rows });
  }
  catch (err) {
    next(err);
  }
});

// module.exports = router;
export default router;