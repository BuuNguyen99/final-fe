import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import RecentArrival from './RecentArrival';
import { getPopularProduct } from '../actions';
import { makeSelectPopularProduct } from '../selectors';

const key = 'home';

function NewProducts({ dataPopular, onGetViewHomeProduct }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onGetViewHomeProduct();
  }, []);

  return (
    <div className="new-products container">
      <p className="new-products__mark">new products</p>
      <h3 className="new-products__title">Popular Products</h3>
      <p className="new-shop__content">
        All products are recommended exclusively and tailored to your needs
      </p>

      {!dataPopular?.isFetching && (
        <div className="new-products__show">
          <RecentArrival dataPopular={dataPopular} />
        </div>
      )}
      {dataPopular?.data.length > 6 && (
        <div className="new-products__view-all">
          <Link to="/popular-list" className="cta">
            <span>View all</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5" />
              <polyline points="8 1 12 5 8 9" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataPopular: makeSelectPopularProduct(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetViewHomeProduct: () => dispatch(getPopularProduct()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(NewProducts);
