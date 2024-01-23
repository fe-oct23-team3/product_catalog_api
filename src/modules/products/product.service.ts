import { Products } from './product.model';
import * as productDetailsService from '../productsDetails/productsDetails.service';
import sequelize from 'sequelize';

export const getAll = async (
  page?: number,
  limit?: number,
  order?: string,
  direction?: string,
  type?: string,
) => {
  if (!page) {
    page = 0;
  }

  if (!limit) {
    limit = 16;
  }

  let orderColumn = 'id';
  let orderDirection = 'ASC';

  if (order) {
    orderColumn = order;

    if (direction) {
      orderDirection = direction.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    }
  }

  const whereClause = type ? { category: type } : undefined;

  const products = await Products.findAndCountAll({
    limit: limit,
    offset: page * limit,
    order: [[orderColumn, orderDirection]],
    where: whereClause,
  });

  return products;
};

export const getRecomendedById = async (id: number) => {
  const product = await getById(id);

  if (!product) {
    return;
  }

  const recomended = await getAll(
    0,
    16,
    'year',
    'desc',
    product.get('category') as string,
  );

  return recomended;
};

export const findHighestDiscountProducts = async () => {
  const products = await Products.findAll({
    order: [
      [
        sequelize.literal('("Products"."fullPrice" - "Products"."price")'),
        'DESC',
      ],
    ],
    limit: 16,
  });

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
