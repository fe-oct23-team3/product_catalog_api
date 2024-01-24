import { Products } from '../models/product.model';
import * as productDetailsService from './productsDetails.service';
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

export const getRecomendedById = async (id: string) => {
  const productCard = await Products.findOne({
    where: {
      itemId: id,
    },
  });

  if (!productCard) {
    return;
  }

  const recomended = await getAll(
    0,
    16,
    'year',
    'desc',
    productCard.get('category') as string,
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

export const findProductDetailsById = async (id: string) => {
  const currentProduct = await productDetailsService.getById(id);

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
