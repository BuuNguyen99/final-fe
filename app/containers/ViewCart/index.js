import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Payment from './Payment';

function ViewCart() {
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
        <div className="row order-list__header">
          <div className="col-6">
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
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="payment">
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default ViewCart;
