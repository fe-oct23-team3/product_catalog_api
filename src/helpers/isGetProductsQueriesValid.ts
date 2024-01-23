import { isNumberValid } from './isNumberValid';

export const isGetProductsQueriesValid = (
  page: number,
  limit: number,
  order: string,
  direction: string,
  type: string | undefined,
) => {
  if (page && (!isNumberValid(page) || page < 0 || page > 200)) {
    return false;
  }

  if (page && (!isNumberValid(limit) || limit < 0 || limit > 200)) {
    return false;
  }

  if (order && !['year', 'price'].includes(order)) {
    return false;
  }

  if (direction && !['DESC', 'desc', 'ASC', 'asc'].includes(direction)) {
    return false;
  }

  if (type && !['phones', 'tablets', 'accessories'].includes(type)) {
    return false;
  }

  return true;
};
