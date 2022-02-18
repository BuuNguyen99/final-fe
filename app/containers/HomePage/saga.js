import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST, SUCCESS, FAILURE } from 'utils/actionType';
import { ENDPOINT } from 'shared/constants/endpoint';
import Api from 'shared/configs/api';
import {
  GET_LIST_VIEW_ACTION,
  DELETE_PRODUCT_ACTION,
} from 'containers/HomePage/constants';

const { API } = ENDPOINT;

function getViewHomeProductApi(data) {
  return Api.post(API.GET_LIST_LAPTOP, data);
}

export function* getViewHomeProduct({ dataProduct, filter }) {
  try {
    const response = yield call(getViewHomeProductApi, dataProduct);
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

export default function* authData() {
  yield takeEvery(REQUEST(GET_LIST_VIEW_ACTION), getViewHomeProduct);
  yield takeLatest(REQUEST(DELETE_PRODUCT_ACTION), deleteProductItemSaga);
}
