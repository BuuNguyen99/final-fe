import SliderProducts from 'components/SliderProducts';
import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getViewHomeProduct } from 'containers/HomePage/actions';
import { makeSelectDataSmartphoneHome } from 'containers/HomePage/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import { Link } from 'react-router-dom';
const key = 'home';

function SmartPhone({ dataSmartphone, onGetViewHomeProduct }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const data = {
      searchFilters: [
        {
          property: 'category',
          operator: 'LIKE',
          value: 'smartphone',
        },
      ],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: [],
      },
      joinColumnProps: [],
    };
    onGetViewHomeProduct(data, 'smartphone');
  }, []);

  return (
    <div className="smartphone container">
      {!dataSmartphone?.isFetching && (
        <>
          <div className="smartphone-header">
            <p className="smartphone__mark">smartphones</p>
            <h3 className="smartphone__title">Popular smartphones </h3>
          </div>
          <div className="my-5">
            <SliderProducts data={dataSmartphone?.data?.content || []} />
          </div>
          <div className="smartphone__view-all">
            <Link to="smart-phone-list" className="cta">
              <span>View all</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5" />
                <polyline points="8 1 12 5 8 9" />
              </svg>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataSmartphone: makeSelectDataSmartphoneHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetViewHomeProduct: (data, filter) =>
      dispatch(getViewHomeProduct(data, filter)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SmartPhone);
