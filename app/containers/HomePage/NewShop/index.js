import React, { memo, useEffect } from 'react';
import { Rate } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import { formatPriceVND } from 'utils/common';
import { createStructuredSelector } from 'reselect';
import { getViewHomeProduct } from '../actions';
import { makeSelectDataProduct } from '../selectors';

const key = 'home';

function NewShop({ dataProduct, onGetViewHomeProduct }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const data = {
      searchFilters: [],
      sortOrder: {
        ascendingOrder: [],
        descendingOrder: ['createdAt'],
      },
      joinColumnProps: [],
    };

    const params = {
      page: 0,
      size: 9,
    };
    onGetViewHomeProduct(data, '', params);
  }, []);

  return (
    <div className="new-shop container">
      {!dataProduct?.isFetching && dataProduct?.data?.content?.length >= 7 ? (
        <>
          <p className="new-shop__mark">New Shop</p>
          <h3 className="new-shop__header">An enormous storehouse of facts</h3>
          <p className="new-shop__content">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested
          </p>
          <div className="new-shop__list row">
            <div className="new-shop__item col-4">
              <div className="new-shop__item-product item-1">
                <div className="show-top">
                  <span className="money-sale">
                    {formatPriceVND(
                      dataProduct?.data?.content[0]?.price?.toString(),
                    )}{' '}
                    VND
                  </span>
                  <div className="rate">
                    <Rate
                      defaultValue={
                        dataProduct?.data?.content[0]?.averageRating
                      }
                      disabled
                      className="rating"
                    />
                  </div>
                </div>
                <img
                  src={dataProduct?.data?.content[0]?.images[0]?.url}
                  alt=""
                />
              </div>
              <div className="new-shop__item-product item-2">
                <div className="show-top">
                  <span className="money-sale">
                    {formatPriceVND(
                      dataProduct?.data?.content[1]?.price?.toString(),
                    )}{' '}
                  </span>
                  <div className="rate">
                    <Rate
                      defaultValue={
                        dataProduct?.data?.content[1]?.averageRating
                      }
                      disabled
                      className="rating"
                    />
                  </div>
                </div>
                <img
                  src={dataProduct?.data?.content[1]?.images[0]?.url}
                  alt=""
                />
              </div>
            </div>
            <div className="new-shop__item col-4">
              <div className="new-shop__item-product item-3">
                <div className="show-top">
                  <span className="money-sale">
                    {formatPriceVND(
                      dataProduct?.data?.content[2]?.price?.toString(),
                    )}{' '}
                    VND
                  </span>
                  <div className="rate">
                    <Rate
                      defaultValue={
                        dataProduct?.data?.content[2]?.averageRating
                      }
                      disabled
                      className="rating"
                    />
                  </div>
                </div>
                <img
                  src={dataProduct?.data?.content[2]?.images[0]?.url}
                  alt=""
                />
              </div>
              <div className="new-shop__item-product item-4">
                <div className="show-top">
                  <span className="money-sale">
                    {formatPriceVND(
                      dataProduct?.data?.content[3]?.price?.toString(),
                    )}{' '}
                    VND
                  </span>
                  <div className="rate">
                    <Rate
                      defaultValue={
                        dataProduct?.data?.content[3]?.averageRating
                      }
                      disabled
                      className="rating"
                    />
                  </div>
                </div>
                <img
                  src={dataProduct?.data?.content[3]?.images[0]?.url}
                  alt=""
                />
              </div>
              <div className="new-shop__item-product item-5">
                <div className="show-top">
                  <span className="money-sale">
                    {formatPriceVND(
                      dataProduct?.data?.content[4]?.price?.toString(),
                    )}{' '}
                    VND
                  </span>
                  <div className="rate">
                    <Rate
                      defaultValue={
                        dataProduct?.data?.content[4]?.averageRating
                      }
                      disabled
                      className="rating"
                    />
                  </div>
                </div>
                <img
                  src={dataProduct?.data?.content[4]?.images[0]?.url}
                  alt=""
                />
              </div>
            </div>
            <div className="new-shop__item col-4">
              <div className="new-shop__item-product item-6">
                <div className="show-top">
                  <span className="money-sale">
                    {formatPriceVND(
                      dataProduct?.data?.content[5]?.price?.toString(),
                    )}{' '}
                    VND
                  </span>
                  <div className="rate">
                    <Rate
                      defaultValue={
                        dataProduct?.data?.content[5]?.averageRating
                      }
                      disabled
                      className="rating"
                    />
                  </div>
                </div>
                <img
                  src={dataProduct?.data?.content[5]?.images[0]?.url}
                  alt=""
                />
              </div>
              <div className="new-shop__item-product item-7">
                <div className="show-top">
                  <span className="money-sale">
                    {formatPriceVND(
                      dataProduct?.data?.content[6]?.price?.toString(),
                    )}{' '}
                    VND
                  </span>
                  <div className="rate">
                    <Rate
                      defaultValue={
                        dataProduct?.data?.content[6]?.averageRating
                      }
                      disabled
                      className="rating"
                    />
                  </div>
                </div>
                <img
                  src={dataProduct?.data?.content[6]?.images[0]?.url}
                  alt=""
                />
              </div>
            </div>
          </div>{' '}
        </>
      ) : null}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataProduct: makeSelectDataProduct(),
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
)(NewShop);
