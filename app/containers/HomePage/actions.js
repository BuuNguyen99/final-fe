import { REQUEST } from 'utils/actionType';
import { GET_LIST_VIEW_ACTION } from 'containers/Auth/constants';

export function getViewHomeProduct(dataProduct, filter) {
  return {
    type: REQUEST(GET_LIST_VIEW_ACTION),
    dataProduct,
    filter,
  };
}
