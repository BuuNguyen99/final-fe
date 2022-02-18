import produce from 'immer';
import { REQUEST, SUCCESS, FAILURE } from 'utils/actionType';
import { GET_LIST_VIEW_ACTION } from 'containers/Auth/constants';

export const initialState = {
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
};

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST(GET_LIST_VIEW_ACTION):
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
      default:
        break;
    }
  });

export default authReducer;
