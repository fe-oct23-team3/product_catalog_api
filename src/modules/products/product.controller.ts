import { Controller } from '../typedefs';
import * as productService from './product.service';

export const get: Controller = async (req, res) => {
  const products = await productService.getAll();

  res.send(products);
};
