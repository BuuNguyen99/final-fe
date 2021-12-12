import clsx from 'clsx';
import React, { useState } from 'react';
import BestSellers from './BestSellers';
import FeaturedIn from './FeaturedIn';
import RecentArrival from './RecentArrival';
import SpecialOffers from './SpecialOffers';

function NewProducts() {
  const [isActive, setIsActive] = useState(1);

  const onChangePage = value => {
    setIsActive(value);
  };

  return (
    <div className="new-products container">
      <p className="new-products__mark">new products</p>
      <h3 className="new-products__title">Popular Products</h3>
      <ul className="new-products__menu">
        <li
          className={clsx('new-products__item', isActive === 1 && 'active')}
          onClick={() => onChangePage(1)}
        >
          recent arrival
        </li>
        <li
          className={clsx('new-products__item', isActive === 2 && 'active')}
          onClick={() => onChangePage(2)}
        >
          Best sellers
        </li>
        <li
          className={clsx('new-products__item', isActive === 3 && 'active')}
          onClick={() => onChangePage(3)}
        >
          special offers
        </li>
        <li
          className={clsx('new-products__item', isActive === 4 && 'active')}
          onClick={() => onChangePage(4)}
        >
          featured in
        </li>
      </ul>
      <div className="new-products__show">
        {isActive === 1 && <RecentArrival />}
        {isActive === 2 && <BestSellers />}
        {isActive === 3 && <SpecialOffers />}
        {isActive === 4 && <FeaturedIn />}
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
