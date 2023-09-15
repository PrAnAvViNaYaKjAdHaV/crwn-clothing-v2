/** @format */

import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  getCategoriesAndDocuments,
  getReview,
} from '../../utils/firebase/firebase.utils';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  fetchReviewSuccess,
  fetchReviewFailed,
} from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}
export function* fetchProductReview({ payload: { name } }) {
  try {
    const productReview = yield call(getReview, name);
    yield put(fetchReviewSuccess([...productReview.Product]));
  } catch (error) {
    yield put(fetchReviewFailed(error));
  }
}
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}
export function* onFetchProductReview() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_REVIEW_START,
    fetchProductReview
  );
}
export function* categoriesSaga() {
  yield all([call(onFetchCategories), call(onFetchProductReview)]);
}
