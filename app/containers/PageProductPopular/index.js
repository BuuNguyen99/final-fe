import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import { getPopularProduct } from '../HomePage/actions';
import { makeSelectPopularProduct } from '../HomePage/selectors';
import { formatPriceVND } from '../../utils/common';

const key = 'home';

function PageProductPopular({ dataPopular, onGetViewHomeProduct }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onGetViewHomeProduct();
  }, []);

  return (
    <div className="page-product-list">
      <div className="page-product-list__banner">
        <div className="page-product-list">
          <h2 className="page-product-list__title">Popular Products</h2>
          <div className="page-product-list__link">
            <Link to="/" className="link-home">
              Home
            </Link>
            <span className="link-page-product-list link-page">
              &rsaquo;Popular
            </span>
          </div>
        </div>
      </div>
      <div className="product-container container mb-5">
        {!dataPopular?.isFetching && (
          <div className="product-list-item">
            <div className="row">
              {dataPopular?.data.map((el, index) => (
                <Link
                  to={`/products/${el.slug}`}
                  className="col-3 item-show"
                  key={`item-${index}`}
                >
                  <div className="item">
                    <p className="item__sell">
                      {el?.discount > 0 &&
                        `Get up to ${el?.discount}% off Today Only!`}
                    </p>
                    <div className="item__image">
                      <img src={el.images[0].url} alt="" />
                    </div>
                    <div className="item__infor">
                      <h3 className="title">{el.title}</h3>
                      <p className="price">
                        {formatPriceVND(el.price.toString())} VND
                      </p>
                      <Rate
                        defaultValue={el.averageRating}
                        disabled
                        className="rating"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
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
)(PageProductPopular);
