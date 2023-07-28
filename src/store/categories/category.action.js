import { CATEGORIES_ACTION_TYPES } from './category.types';

import { createAction } from '../../utils/reducer/reducer.utils';
const FindProduct = (category, id) => {
  const FilterCategoryObject = Object.values(category).map((data) => data.filter((d) => d.id === id));
  const ans = [].concat(...FilterCategoryObject)
  return ans
}
export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const categoriesProduct = (category, id) => {
  const product = FindProduct(category, id)
  console.log(product[0])
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PRODUCT, product[0])
}

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
