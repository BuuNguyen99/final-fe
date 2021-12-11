import React from 'react';
import RecentArrival from './RecentArrival';

function NewProducts() {
  return (
    <div className="new-products container">
      <p className="new-products__mark">new products</p>
      <h3 className="new-products__title">Popular Products</h3>
      <ul className="new-products__menu">
        <li className="new-products__item active">recent arrival</li>
        <li className="new-products__item">Best sellers</li>
        <li className="new-products__item">special offers</li>
        <li className="new-products__item">featured in</li>
      </ul>
      <div className="new-products__show">
        <RecentArrival />
      </div>
      <div className="new-products__view-all">
        <a href="#" className="cta">
          <span>View all</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5" />
            <polyline points="8 1 12 5 8 9" />
          </svg>
        </a>
      </div>
    </div>
  );
}
export default NewProducts;
