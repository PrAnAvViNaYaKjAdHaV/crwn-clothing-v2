/** @format */

import { CATEGORIES_ACTION_TYPES } from './category.types';

import { createAction } from '../../utils/reducer/reducer.utils';
const FindProduct = (category, id) => {
  const FilterCategoryObject = Object.values(category).map((data) =>
    data.filter((d) => d.id === id)
  );
  const ans = [].concat(...FilterCategoryObject);
  return ans;
};
export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const categoriesProduct = (category, id) => {
  const product = FindProduct(category, id);
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PRODUCT,
    product[0]
  );
};

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchReviewFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_REVIEW_FAILED, error);

export const fetchReviewStart = (name) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_REVIEW_START, { name });

export const fetchReviewSuccess = (review) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_REVIEW_SUCCESS, review);
