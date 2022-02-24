import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, Rate } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getViewHomeProduct } from 'containers/HomePage/actions';
import { makeSelectDataSmartwatchHome } from 'containers/HomePage/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import { formatPriceVND } from 'utils/common';
import PaginationComponent from '../../components/Pagination';

const { Option } = Select;

const key = 'home';

function PageProductListSmartWatch({ dataSmartwatch, onGetViewHomeProduct }) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('Latest Product');
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  function handleChange(value) {
    setFilter(value);
    const data = {
      searchFilters: [
        {
          property: 'category',
          operator: 'LIKE',
          value: 'smartwatch',
        },
      ],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: [],
      },
      joinColumnProps: [],
    };

    const params = {
      page: page - 1,
      size: 12,
    };
    if (value === 'Latest Product') {
      data.sortOrder.descendingOrder = ['createdAt'];
    }
    if (value === 'Price Descending') {
      data.sortOrder.descendingOrder = ['price'];
    }

    if (value === 'Price Increase') {
      data.sortOrder.ascendingOrder = ['price'];
    }
    onGetViewHomeProduct(data, 'smartwatch', params);
  }

  const handleCallbackPage = value => {
    setPage(value);

    const data = {
      searchFilters: [
        {
          property: 'category',
          operator: 'LIKE',
          value: 'smartwatch',
        },
      ],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: [],
      },
      joinColumnProps: [],
    };

    const params = {
      page: value - 1,
      size: 12,
    };

    if (filter === 'Latest Product') {
      data.sortOrder.descendingOrder = ['createdAt'];
    }
    if (filter === 'Price Descending') {
      data.sortOrder.descendingOrder = ['price'];
    }

    if (filter === 'Price Increase') {
      data.sortOrder.ascendingOrder = ['price'];
    }
    onGetViewHomeProduct(data, 'smartwatch', params);
  };

  useEffect(() => {
    const data = {
      searchFilters: [
        {
          property: 'category',
          operator: 'LIKE',
          value: 'smartwatch',
        },
      ],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: [],
      },
      joinColumnProps: [],
    };

    if (filter === 'Latest Product') {
      data.sortOrder.descendingOrder = ['createdAt'];
    }
    if (filter === 'Price Descending') {
      data.sortOrder.descendingOrder = ['price'];
    }

    if (filter === 'Price Increase') {
      data.sortOrder.ascendingOrder = ['price'];
    }
    const params = {
      page: page - 1,
      size: 12,
    };

    onGetViewHomeProduct(data, 'smartwatch', params);
  }, []);

  return (
    <div className="page-product-list">
      <div className="page-product-list__banner">
        <div className="page-product-list">
          <h2 className="page-product-list__title">Popular smartwatch</h2>
          <div className="page-product-list__link">
            <Link to="/" className="link-home">
              Home
            </Link>
            <span className="link-page-product-list link-page">
              &rsaquo;SMARTWATCH
            </span>
          </div>
        </div>
      </div>
      <div className="product-container container">
        <div className="filter">
          <Select
            defaultValue="Latest Product"
            style={{ width: 200 }}
            onChange={handleChange}
          >
            <Option value="Latest Product">Latest Product</Option>
            <Option value="Price Descending">Price Descending</Option>
            <Option value="Price Increase">Prices Increase</Option>
          </Select>
        </div>
        <div className="product-list-item">
          {!dataSmartwatch?.isFetching && (
            <div className="row">
              {dataSmartwatch?.data?.content &&
                dataSmartwatch?.data?.content.map((el, index) => (
                  <div className="col-3 item-show" key={index}>
                    <Link to={`/products/${el.slug}`}>
                      <div className="item">
                        <p className="item__sell">
                          {el?.discount > 0 &&
                            `Get up to ${el?.discount}% off Today Only!`}
                        </p>
                        <div className="item__image">
                          <img src={el?.images[0]?.url} alt="" />
                        </div>
                        <div className="item__infor">
                          <h4 className="title">{el?.title}</h4>
                          <p className="price">
                            {formatPriceVND(el?.price?.toString())} VND
                          </p>
                          <Rate
                            defaultValue={el?.averageRating}
                            disabled
                            className="rating"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="product-pagination">
          <PaginationComponent
            handleCallbackPage={handleCallbackPage}
            pageCount={dataSmartwatch?.data?.totalItems}
            activePage={page}
            limit={12}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataSmartwatch: makeSelectDataSmartwatchHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetViewHomeProduct: (data, filter, params) =>
      dispatch(getViewHomeProduct(data, filter, params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PageProductListSmartWatch);
