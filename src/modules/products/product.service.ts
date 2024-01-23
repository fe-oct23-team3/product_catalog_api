import { Products } from './product.model';
import * as productDetailsService from '../productsDetails/productsDetails.service';

export const getAll = async () => {
  const products = await Products.findAll();

  return products;
};

export const getById = (id: number) => Products.findByPk(id);

export const findProductDetailsById = async (id: number) => {
  const product = await getById(id);

  if (!product) {
    return;
  }

  const productId = product.get('itemId');
  const currentProduct = await productDetailsService.getById(productId);

  return currentProduct;
};

export const bulkCreate = (
  options: {
    category: string;
    itemId: string;
    name: string;
    fullPrice: number;
    price: number;
    screen: string;
    capacity: string;
    color: string;
    ram: string;
    year: number;
    image: string;
  }[],
) => {
  return Products.bulkCreate(options);
};
