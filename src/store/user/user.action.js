import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

/*
CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
  GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'user/SIGN_IN_FAILURE'

*/
const NewHistoryReview = (User, rating, review, date, id) => {
  const { History } = User
  const objectToModifyIndex = History.findIndex(obj => obj.date === date);
  if (objectToModifyIndex !== -1) {
    let objectToModify = History[objectToModifyIndex]
    const ProductIndex = objectToModify.product.findIndex(obj => obj.id === id)
    let Product = objectToModify.product[ProductIndex]
    console.log(Product)
    console.log(rating, review)
    Product['rating'] = rating
    Product['review'] = review
  }
}
const NewHistory = (userAuth, product) => {
  const { History } = userAuth
  const Today = new Date();
  const date = Today.toISOString().split('T')[0];
  const objectTofindDate = History.findIndex(obj => obj.date === date)
  if (objectTofindDate === -1) {
    const data = {
      date: date,
      product: [...product]
    }
    History.push(data)
  } else {
    const Date = History[objectTofindDate]
    Date.product.push(...product)
  }
}
export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);

export const userUpdateHistoryFailed = (error) => createAction(USER_ACTION_TYPES.USER_HISTORY_FAILED, error);

export const userUpdateHistoryStart = (userAuth, product) => {
  NewHistory(userAuth, product)
  return createAction(USER_ACTION_TYPES.USER_HISTORY_START, { userAuth })
}

export const userUpdateHistorySuccess = (user) => createAction(USER_ACTION_TYPES.USER_HISTORY_SUCCESS, user)

export const userUpdateReview = (user, rating, review, date, id, name) => {
  NewHistoryReview(user, rating, review, date, id)
  return createAction(USER_ACTION_TYPES.USER_HISTORY_REVIEW, { name, user, rating, review })
}