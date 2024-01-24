import { ProductsDetails } from '../models/productsDetails.model';

export const getAll = async () => {
  const data = await ProductsDetails.findAll();

  return data;
};

export const getById = (id: string) => ProductsDetails.findByPk(id);

export const bulkCreate = (
  options: {
    id: string;
    namespaceId: string;
    name: string;
    capacityAvailable: string[];
    capacity: string;
    priceRegular: number;
    priceDiscount: number;
    colorsAvailable: string[];
    color: string;
    images: string[];
    description: {
      title: string;
      text: string[];
    }[];
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    camera?: string;
    zoom?: string;
    cell: string[];
  }[],
) => {
  return ProductsDetails.bulkCreate(options);
};
