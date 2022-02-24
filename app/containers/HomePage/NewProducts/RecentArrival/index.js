import { Rate } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatPriceVND } from '../../../../utils/common';

function RecentArrival({ dataPopular }) {
  return (
    <>
      {!dataPopular?.isFetching && (
        <div className="recent-arrival row">
          {dataPopular.data.map((el, index) => (
            <Link
              to={`/products/${el.slug}`}
              className="col-4 item-show"
              key={`item-show-${index}`}
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
      )}
    </>
  );
}

export default RecentArrival;
