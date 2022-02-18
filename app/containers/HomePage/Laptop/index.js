import SliderProducts from 'components/SliderProducts';
import React, { memo, useEffect } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getViewHomeProduct } from 'containers/HomePage/actions';
import { makeSelectDataLaptopHome } from 'containers/HomePage/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import { Link } from 'react-router-dom';

const key = 'home';

function Laptop({ dataLaptop, onGetViewHomeProduct }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const data = {
      searchFilters: [
        {
          property: 'category',
          operator: 'LIKE',
          value: 'laptop',
        },
      ],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: [],
      },
      joinColumnProps: [],
    };
    onGetViewHomeProduct(data, 'laptop');
  }, []);
  return (
    <div className="laptop container">
      {!dataLaptop?.isFetching && (
        <>
          <div className="laptop-header">
            <p className="laptop__mark">Laptop & Table</p>
            <h3 className="laptop__title">Popular Laptops And Tablets</h3>
          </div>
          <div className="my-5">
            <SliderProducts data={dataLaptop?.data?.content || []} />
          </div>
          <div className="laptop__view-all">
            <Link to="/laptop-list" className="cta">
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
  dataLaptop: makeSelectDataLaptopHome(),
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
)(Laptop);
