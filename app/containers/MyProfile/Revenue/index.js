import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import FiveMember from './FiveMember';
import FiveProduct from './FiveProduct';
import RevenueTotal from './RevenueTotal';
import {
  getFiveProduct,
  getFiveUser,
  getTotalRevenue,
} from '../../HomePage/actions';
import {
  makeSelectDataFiveProduct,
  makeSelectDataFiveUser,
  makeSelectDataTotalRevenue,
} from '../../HomePage/selectors';

const key = 'home';

function Revenue({
  dataTotalRevenue,
  dataFiveUser,
  dataFiveProduct,
  onGetTotalRevenue,
  onGetFiveUser,
  onGetFiveProduct,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const year = new Date().getFullYear();
    onGetTotalRevenue(year);
    onGetFiveUser();
    onGetFiveProduct();
  }, []);
  return (
    <div className="revenue container">
      <div
        className="row revenue__chart-total-money mt-5"
        style={{ margin: '30px 0px' }}
      >
        <div className="col-6">
          <h3>Price Statistics</h3>
          {!dataTotalRevenue?.isFetching && (
            <RevenueTotal dataTotalRevenue={dataTotalRevenue?.data} />
          )}
        </div>
        <div className="col-2" />
        <div className="col-3">
          <h3>Top 5 users buy the most products</h3>
          {!dataFiveUser?.isFetching && (
            <FiveMember dataFiveUser={dataFiveUser?.data} />
          )}
        </div>
      </div>
      <div
        className="row revenue__chart-total-money"
        style={{ margin: '50px 0px' }}
      >
        <div className="col-4" />
        <div className="col-4">
          <h3>Top 5 best selling products</h3>
          {!dataFiveProduct?.isFetching && (
            <FiveProduct dataFiveProduct={dataFiveProduct?.data} />
          )}
        </div>
        <div className="col-4" />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataTotalRevenue: makeSelectDataTotalRevenue(),
  dataFiveUser: makeSelectDataFiveUser(),
  dataFiveProduct: makeSelectDataFiveProduct(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetTotalRevenue: data => dispatch(getTotalRevenue(data)),
    onGetFiveUser: () => dispatch(getFiveUser()),
    onGetFiveProduct: () => dispatch(getFiveProduct()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Revenue);
