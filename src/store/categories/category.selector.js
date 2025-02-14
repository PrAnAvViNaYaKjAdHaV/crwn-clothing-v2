/** @format */

import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const productsList = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.product
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

export const selectReview = createSelector(
  [selectCategoryReducer],
  (productReview) => productReview.product_review
);
