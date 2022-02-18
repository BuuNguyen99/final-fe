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

export {
  selectHomePage,
  makeSelectDataLaptopHome,
  makeSelectDataCameraHome,
  makeSelectDataSmartwatchHome,
  makeSelectDataSmartphoneHome,
  makeSelectDataProduct,
  makeSelectDeleteProduct,
};
