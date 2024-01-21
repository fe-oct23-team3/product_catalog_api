import { Controller } from '../typedefs';
import * as productService from './product.service';
import { isNumberValid } from '../../helpers/isNumberValid';
import { isGetProductsQueriesValid } from '../../helpers/isGetProductsQueriesValid';

export const get: Controller = async (req, res) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const order = req.query.order?.toString();
  const type = req.query.type?.toString();

  if (!isGetProductsQueriesValid(page, limit, order || '', type)) {
    res.sendStatus(400);

    return;
  }

  const products = await productService.getAll(page, limit, order, type);

  res.send(products);
};

export const getOne: Controller = async (req, res) => {
  const { id: idParams } = req.params;
  const id = Number(idParams);

  if (!isNumberValid(id)) {
    res.sendStatus(400);

    return;
  }

  const product = await productService.findProductDetailsById(id);

  if (!product) {
    res.sendStatus(404);

    return;
  }

  res.send(product);
};
