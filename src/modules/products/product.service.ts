import { Products } from './product.model';

export const getAll = async () => {
  const data = await Products.findAll();

  return data;
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
