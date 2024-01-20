import express from 'express';
import * as productController from './product.controller';

const productRouter = express.Router();

productRouter.get('/', productController.get);

export { productRouter };
