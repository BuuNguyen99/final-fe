import { REQUEST } from 'utils/actionType';
import {
  REMOVE_TOKEN,
  GET_PROFILE,
  UPDATE_PROFILE,
  REGISTER_ACCOUNT,
  LOGIN_ACCOUNT,
  FORGOT_PASSWORD_ACCOUNT,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  ADD_PRODUCT_ACTION,
  GET_CART_PRODUCT,
  DELETE_ITEM_CART,
  GET_LIST_PRODUCT,
  VERIFY_ACCOUNT,
  BUY_CART,
  BUY_BANK,
} from 'containers/Auth/constants';

export function registerAccount(data, callBack) {
  return {
    type: REQUEST(REGISTER_ACCOUNT),
    data,
    callBack,
  };
}

export function loginAccount(data, callBack) {
  return {
    type: REQUEST(LOGIN_ACCOUNT),
    data,
    callBack,
  };
}
export function forgotPassword(data) {
  return {
    type: REQUEST(FORGOT_PASSWORD_ACCOUNT),
    data,
  };
}

export function resetPassword(data, callBack) {
  return {
    type: REQUEST(RESET_PASSWORD),
    data,
    callBack,
  };
}

export function removeToken(dataToken) {
  return {
    type: REQUEST(REMOVE_TOKEN),
    dataToken,
  };
}

export function getProfile(dataProfile) {
  return {
    type: REQUEST(GET_PROFILE),
    dataProfile,
  };
}

export function updateProfile(dataProfile, callBack) {
  return {
    type: REQUEST(UPDATE_PROFILE),
    dataProfile,
    callBack,
  };
}

export function changePasswordAccount(data, callBack) {
  return {
    type: REQUEST(CHANGE_PASSWORD),
    data,
    callBack,
  };
}

export function addProductItem(data, callBack) {
  return {
    type: REQUEST(ADD_PRODUCT_ACTION),
    data,
    callBack,
  };
}

export function getCartProduct() {
  return {
    type: REQUEST(GET_CART_PRODUCT),
  };
}

export function deleteItemCart(id, idItem) {
  return {
    type: REQUEST(DELETE_ITEM_CART),
    id,
    idItem,
  };
}

export function getViewHomeProduct(dataProduct, params) {
  return {
    type: REQUEST(GET_LIST_PRODUCT),
    dataProduct,
    params,
  };
}

export function verifyAccount(data) {
  return {
    type: REQUEST(VERIFY_ACCOUNT),
    data,
  };
}

export function buyCart(dataCart, callBack) {
  return {
    type: REQUEST(BUY_CART),
    dataCart,
    callBack,
  };
}

export function buyBank(dataBank) {
  return {
    type: REQUEST(BUY_BANK),
    dataBank,
  };
}
