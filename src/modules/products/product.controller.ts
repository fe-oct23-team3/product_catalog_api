import { Controller } from '../typedefs';
import * as productService from './product.service';
import { isNumberIdValid } from '../../helpers/isNumberIdValid';

export const get: Controller = async (req, res) => {
  const products = await productService.getAll();

  res.send(products);
};

export const getOne: Controller = async (req, res) => {
  const { id: idParams } = req.params;
  const id = Number(idParams);

  if (!isNumberIdValid(id)) {
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
