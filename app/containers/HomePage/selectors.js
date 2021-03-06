import { createSelector } from 'reselect';
import { initialState } from 'containers/HomePage/reducer';

const selectHomePage = state => state.home || initialState;

const makeSelectDataLaptopHome = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataLaptop,
  );
const makeSelectDataCameraHome = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataCamera,
  );
const makeSelectDataSmartwatchHome = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataSmartwatch,
  );
const makeSelectDataSmartphoneHome = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataSmartphone,
  );

const makeSelectDataProduct = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataProduct,
  );

const makeSelectDeleteProduct = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.deleteProduct,
  );

const makeSelectPopularProduct = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataPopular,
  );

const makeSelectDataAccount = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataAccount,
  );

const makeSelectAddDataAccount = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataAddAccount,
  );

const makeSelectDetailAccount = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataDetailAccount,
  );

const makeSelectDetailProduct = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataDetailProduct,
  );

const makeSelectDataComment = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataComment,
  );

const makeSelectDataListOrder = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataGetListOrder,
  );

const makeSelectDataTotalRevenue = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataTotalRevenue,
  );
const makeSelectDataFiveUser = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataFiveUser,
  );
const makeSelectDataFiveProduct = () =>
  createSelector(
    selectHomePage,
    homeState => homeState.dataFiveProduct,
  );

export {
  selectHomePage,
  makeSelectDataLaptopHome,
  makeSelectDataCameraHome,
  makeSelectDataSmartwatchHome,
  makeSelectDataSmartphoneHome,
  makeSelectDataProduct,
  makeSelectPopularProduct,
  makeSelectDeleteProduct,
  makeSelectDataAccount,
  makeSelectAddDataAccount,
  makeSelectDetailAccount,
  makeSelectDetailProduct,
  makeSelectDataComment,
  makeSelectDataListOrder,
  makeSelectDataTotalRevenue,
  makeSelectDataFiveUser,
  makeSelectDataFiveProduct,
};
