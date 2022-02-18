import { createSelector } from 'reselect';
import { initialState } from 'containers/Auth/reducer';

const selectAuth = state => state.home || initialState;

const makeSelectDataLaptopHome = () =>
  createSelector(
    selectAuth,
    authState => authState.dataLaptop,
  );
const makeSelectDataCameraHome = () =>
  createSelector(
    selectAuth,
    authState => authState.dataCamera,
  );
const makeSelectDataSmartwatchHome = () =>
  createSelector(
    selectAuth,
    authState => authState.dataSmartwatch,
  );
const makeSelectDataSmartphoneHome = () =>
  createSelector(
    selectAuth,
    authState => authState.dataSmartphone,
  );

export {
  selectAuth,
  makeSelectDataLaptopHome,
  makeSelectDataCameraHome,
  makeSelectDataSmartwatchHome,
  makeSelectDataSmartphoneHome,
};
