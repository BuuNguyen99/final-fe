import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { deleteItemCart, getCartProduct } from '../Auth/actions';
import { makeSelectCartProduct } from '../Auth/selectors';
import CartItem from './CartItem';
import Payment from './Payment';

function ViewCart({ dataCart, onDeleteItemCart, onGetCartProduct }) {
  return (
    <div className="view-cart">
      <div className="page-product-list__banner">
        <div className="page-product-list">
          <h2 className="page-product-list__title">Ordered List</h2>
          <div className="page-product-list__link">
            <Link to="/" className="link-home">
              Home
            </Link>
            <span className="link-page-product-list link-page">
              &rsaquo;Order
            </span>
          </div>
        </div>
      </div>
      <div className="container order-list">
        {!dataCart?.isFetching && (
          <>
            <div className="row order-list__header">
              <div className="col-5">
                <p className="header-item">Product</p>
              </div>
              <div className="col-2">
                <p className="header-item">Unit Price</p>
              </div>
              <div className="col-2">
                <p className="header-item">Amount</p>
              </div>
              <div className="col-2">
                <p className="header-item">Money</p>
              </div>
              <div className="col-1">
                <p className="header-item">Delete</p>
              </div>
            </div>
            {dataCart?.data?.map(el => (
              <CartItem
                data={el}
                onDeleteItemCart={onDeleteItemCart}
                onGetCartProduct={onGetCartProduct}
              />
            ))}
            <div className="payment">
              <Payment dataCart={dataCart} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataCart: makeSelectCartProduct(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetCartProduct: () => dispatch(getCartProduct()),
    onDeleteItemCart: (data, idItem) => dispatch(deleteItemCart(data, idItem)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ViewCart);
