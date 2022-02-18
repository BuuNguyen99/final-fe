import produce from 'immer';
import { REQUEST, SUCCESS, FAILURE } from 'utils/actionType';
import {
  GET_LIST_VIEW_ACTION,
  DELETE_PRODUCT_ACTION,
} from 'containers/HomePage/constants';

export const initialState = {
  dataProduct: {
    data: [],
    isFetching: false,
  },
  dataLaptop: {
    data: [],
    isFetching: false,
  },
  dataCamera: {
    data: [],
    isFetching: false,
  },
  dataSmartwatch: {
    data: [],
    isFetching: false,
  },
  dataSmartphone: {
    data: [],
    isFetching: false,
  },
  deleteProduct: {
    isFetching: false,
  },
};

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST(GET_LIST_VIEW_ACTION):
        draft.dataProduct.isFetching = true;
        if (action.filter === 'laptop') {
          draft.dataLaptop.isFetching = true;
        }
        if (action.filter === 'camera') {
          draft.dataCamera.isFetching = true;
        }
        if (action.filter === 'smartwatch') {
          draft.dataSmartwatch.isFetching = true;
        }
        if (action.filter === 'smartphone') {
          draft.dataSmartphone.isFetching = true;
        }
        break;
      case SUCCESS(GET_LIST_VIEW_ACTION):
        draft.dataProduct.data = action.data;
        draft.dataProduct.isFetching = false;
        if (action.filter === 'laptop') {
          draft.dataLaptop.data = action.data;
          draft.dataLaptop.isFetching = false;
        }
        if (action.filter === 'camera') {
          draft.dataCamera.data = action.data;
          draft.dataCamera.isFetching = false;
        }
        if (action.filter === 'smartwatch') {
          draft.dataSmartwatch.data = action.data;
          draft.dataSmartwatch.isFetching = false;
        }
        if (action.filter === 'smartphone') {
          draft.dataSmartphone.data = action.data;
          draft.dataSmartphone.isFetching = false;
        }
        break;
      case FAILURE(GET_LIST_VIEW_ACTION):
        draft.dataProduct.data = [];
        draft.dataProduct.isFetching = false;
        if (action.filter === 'laptop') {
          draft.dataLaptop.data = [];
          draft.dataLaptop.isFetching = false;
        }
        if (action.filter === 'camera') {
          draft.dataCamera.data = [];
          draft.dataCamera.isFetching = false;
        }
        if (action.filter === 'smartwatch') {
          draft.dataSmartwatch.data = [];
          draft.dataSmartwatch.isFetching = false;
        }
        if (action.filter === 'smartphone') {
          draft.dataSmartphone.data = [];
          draft.dataSmartphone.isFetching = false;
        }
        break;
      case REQUEST(DELETE_PRODUCT_ACTION):
        draft.deleteProduct.isFetching = true;
        break;
      case SUCCESS(DELETE_PRODUCT_ACTION):
        draft.deleteProduct.isFetching = false;
        // eslint-disable-next-line no-case-declarations
        const indexItem = state.dataProduct.data.content.findIndex(
          item => item?.id === action.id[0],
        );
        draft.dataProduct.data.content.splice(indexItem, 1);
        draft.deleteProduct.isFetching = false;
        break;
      case FAILURE(DELETE_PRODUCT_ACTION):
        draft.deleteProduct.isFetching = false;
        break;
      default:
        break;
    }
  });

export default authReducer;
