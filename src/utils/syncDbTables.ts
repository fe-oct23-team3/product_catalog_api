import { connectToDb } from './db';
import 'dotenv/config';
import { Products } from '../modules/products/product.model';
import { ProductsDetails } from '../modules/productsDetails/productsDetails.model';
import * as productService from '../modules/products/product.service';
import * as productDetailsService from '../modules/productsDetails/productsDetails.service';
import {
  initialPhones,
  initialTablets,
  initialAccessories,
  initialProducts,
} from './initialProducts';

const sync = async () => {
  try {
    await connectToDb();

    await Products.sync({ force: true });
    await ProductsDetails.sync({ force: true });

    await productService.bulkCreate(initialProducts);
    await productDetailsService.bulkCreate(initialPhones);
    await productDetailsService.bulkCreate(initialTablets);
    await productDetailsService.bulkCreate(initialAccessories);
  } catch (e) {
    console.log(e);
  }
};

sync();
