import { Controller } from '../typedefs';
import * as productService from './product.service';
import { isNumberValid } from '../../helpers/isNumberValid';
import { isGetProductsQueriesValid } from '../../helpers/isGetProductsQueriesValid';

export const get: Controller = async (req, res) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const order = req.query.order?.toString();
  const direction = req.query.direction?.toString();
  const type = req.query.type?.toString();

  if (
    !isGetProductsQueriesValid(page, limit, order || '', direction || '', type)
  ) {
    res.sendStatus(400);

    return;
  }

  const products = await productService.getAll(
    page,
    limit,
    order,
    direction,
    type,
  );

  res.send(products);
};

export const getRecomended: Controller = async (req, res) => {
  const { id: idParams } = req.params;
  const id = Number(idParams);

  if (!isNumberValid(id)) {
    res.sendStatus(400);

    return;
  }

  const recomended = await productService.getRecomendedById(id);

  if (!recomended || !recomended.rows.length) {
    res.sendStatus(404);

    return;
  }

  res.send(recomended);
};

export const getNew: Controller = async (req, res) => {
  console.log('in getNew');
  const newProducts = await productService.getAll(0, 16, 'year', 'desc');

  if (!newProducts || !newProducts.rows.length) {
    res.sendStatus(404);

    return;
  }

  res.send(newProducts);
};

export const getHighestDiscountProducts: Controller = async (req, res) => {
  const products = await productService.findHighestDiscountProducts();

  if (!products || !products.length) {
    res.sendStatus(404);

    return;
  }

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
