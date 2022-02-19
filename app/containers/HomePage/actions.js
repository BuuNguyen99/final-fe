import { REQUEST } from 'utils/actionType';
import {
  GET_LIST_VIEW_ACTION,
  GET_LIST_POPULAR_PRODUCT,
  DELETE_PRODUCT_ACTION,
  GET_LIST_ACCOUNT,
  DISABLE_ACCOUNT,
  ENABLE_ACCOUNT,
  DELETE_ACCOUNT,
  ADD_ACCOUNT,
  GET_DETAIL_ACCOUNT,
  EDIT_ACCOUNT,
} from 'containers/HomePage/constants';

export function getViewHomeProduct(dataProduct, filter, params) {
  return {
    type: REQUEST(GET_LIST_VIEW_ACTION),
    dataProduct,
    filter,
    params,
  };
}

export function deleteProductItem(id, callBack) {
  return {
    type: REQUEST(DELETE_PRODUCT_ACTION),
    id,
    callBack,
  };
}

export function getPopularProduct() {
  return {
    type: REQUEST(GET_LIST_POPULAR_PRODUCT),
  };
}

export function getListAccount(dataAccount, params) {
  return {
    type: REQUEST(GET_LIST_ACCOUNT),
    dataAccount,
    params,
  };
}

export function disableAccount(params, id, callBack) {
  return {
    type: REQUEST(DISABLE_ACCOUNT),
    params,
    id,
    callBack,
  };
}

export function enableAccount(params, id, callBack) {
  return {
    type: REQUEST(ENABLE_ACCOUNT),
    params,
    id,
    callBack,
  };
}

export function deleteAccount(id, callBack) {
  return {
    type: REQUEST(DELETE_ACCOUNT),
    id,
    callBack,
  };
}

export function addAccount(data, callBack) {
  return {
    type: REQUEST(ADD_ACCOUNT),
    data,
    callBack,
  };
}

export function editAccount(data, callBack) {
  return {
    type: REQUEST(EDIT_ACCOUNT),
    data,
    callBack,
  };
}

export function getDetailAccount(params) {
  return {
    type: REQUEST(GET_DETAIL_ACCOUNT),
    params,
  };
}
