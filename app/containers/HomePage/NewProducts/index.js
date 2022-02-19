import React from 'react';
import { Link } from 'react-router-dom';
import RecentArrival from './RecentArrival';

function NewProducts() {
  return (
    <div className="new-products container">
      <p className="new-products__mark">new products</p>
      <h3 className="new-products__title">Popular Products</h3>
      <p className="new-shop__content">
        All products are recommended exclusively and tailored to your needs
      </p>

      <div className="new-products__show">
        <RecentArrival />
      </div>
      <div className="new-products__view-all">
        <Link to="/popular-list" className="cta">
          <span>View all</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5" />
            <polyline points="8 1 12 5 8 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
export default NewProducts;
