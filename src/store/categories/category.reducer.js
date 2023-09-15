import { CATEGORIES_ACTION_TYPES } from './category.types';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
  product: {},
  product_review: []
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_PRODUCT:
      return { ...state, product: payload };
    case CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_REVIEW_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_REVIEW_FAILED:
      return { ...state, isLoading: false, error: payload }
    case CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_REVIEW_SUCCESS:
      return { ...state, isLoading: false, product_review: payload }
    default:
      return state;
  }
};
