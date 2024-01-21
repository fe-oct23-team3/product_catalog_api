import { isNumberValid } from './isNumberValid';

export const isGetProductsQueriesValid = (
  page: number,
  limit: number,
  order: string,
  type: string | undefined,
) => {
  if (page && (!isNumberValid(page) || page < 0 || page > 200)) {
    return false;
  }

  if (page && (!isNumberValid(limit) || limit < 0 || limit > 200)) {
    return false;
  }

  const orderParts = order.split(',');

  if (order && !['year', 'price'].includes(orderParts[0])) {
    return false;
  }

  if (
    orderParts[1] &&
    !['DESC', 'desc', 'ASC', 'asc'].includes(orderParts[1])
  ) {
    return false;
  }

  if (type && !['phones', 'tablets', 'accessories'].includes(type)) {
    return false;
  }

  return true;
};
