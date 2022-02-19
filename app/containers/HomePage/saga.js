import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST, SUCCESS, FAILURE } from 'utils/actionType';
import { ENDPOINT } from 'shared/constants/endpoint';
import Api from 'shared/configs/api';
import {
  GET_LIST_VIEW_ACTION,
  GET_LIST_POPULAR_PRODUCT,
  DELETE_PRODUCT_ACTION,
  GET_LIST_ACCOUNT,
} from 'containers/HomePage/constants';

const { API } = ENDPOINT;

function getViewHomeProductApi(data, query) {
  return Api.post(API.GET_LIST_LAPTOP, data, {
    params: {
      ...query,
    },
  });
}

export function* getViewHomeProduct({ dataProduct, filter, params }) {
  try {
    const response = yield call(getViewHomeProductApi, dataProduct, params);
    const { data } = response;

    yield put({ type: SUCCESS(GET_LIST_VIEW_ACTION), data, filter });
  } catch (error) {
    yield put({ type: FAILURE(GET_LIST_VIEW_ACTION), error });
  }
}

function deleteProductApi(id) {
  return Api.delete(API.DELETE_PRODUCT_API, [...id]);
}

export function* deleteProductItemSaga({ id, callBack }) {
  try {
    yield call(deleteProductApi, id);
    yield put({ type: SUCCESS(DELETE_PRODUCT_ACTION), id });
    callBack?.();
  } catch (error) {
    callBack?.(error);
    yield put({ type: FAILURE(DELETE_PRODUCT_ACTION), error });
  }
}

function getPopularProductApi() {
  return Api.get(API.GET_LIST_POPULAR_API);
}

export function* getPopularProduct() {
  try {
    const response = yield call(getPopularProductApi);
    const { data } = response;
    yield put({ type: SUCCESS(GET_LIST_POPULAR_PRODUCT), data });
  } catch (error) {
    yield put({ type: FAILURE(GET_LIST_POPULAR_PRODUCT), error });
  }
}

function getListAccountApi(data, params) {
  return Api.post(API.GET_LIST_ACCOUNT_API, data, {
    params: {
      ...params,
    },
  });
}

export function* getListAccountSaga({ dataAccount, params }) {
  try {
    const response = yield call(getListAccountApi, dataAccount, params);
    const { data } = response;
    yield put({ type: SUCCESS(GET_LIST_ACCOUNT), data });
  } catch (error) {
    yield put({ type: FAILURE(GET_LIST_ACCOUNT), error });
  }
}

export default function* authData() {
  yield takeEvery(REQUEST(GET_LIST_VIEW_ACTION), getViewHomeProduct);
  yield takeLatest(REQUEST(DELETE_PRODUCT_ACTION), deleteProductItemSaga);
  yield takeLatest(REQUEST(GET_LIST_POPULAR_PRODUCT), getPopularProduct);
  yield takeLatest(REQUEST(GET_LIST_ACCOUNT), getListAccountSaga);
}
