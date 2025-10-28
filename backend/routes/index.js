import express from "express";
import productsRouter from './products.router.js';
import ventasRouter from './ventas.router.js';
// const productsRouter = require('./products.router');
// const ventasRouter = require('./ventas.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/ventas', ventasRouter);
}


// module.export = routerApi;
export default routerApi;