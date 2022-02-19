import { REQUEST } from 'utils/actionType';
import {
  GET_LIST_VIEW_ACTION,
  GET_LIST_POPULAR_PRODUCT,
  DELETE_PRODUCT_ACTION,
} from 'containers/HomePage/constants';

export function getViewHomeProduct(dataProduct, filter) {
  return {
    type: REQUEST(GET_LIST_VIEW_ACTION),
    dataProduct,
    filter,
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
