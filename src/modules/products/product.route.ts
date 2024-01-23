import express from 'express';
import * as productController from './product.controller';

const productRouter = express.Router();

productRouter.get('/', productController.get);
productRouter.get('/new', productController.getNew);
productRouter.get('/discount', productController.getHighestDiscountProducts);
productRouter.get('/:id', productController.getOne);
productRouter.get('/:id/recomended', productController.getRecomended);

export { productRouter };
