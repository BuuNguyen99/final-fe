import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { format, parseISO } from 'date-fns';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/HomePage/saga';
import reducer from 'containers/HomePage/reducer';
import { getListOrder } from '../../HomePage/actions';
import { makeSelectDataListOrder } from '../../HomePage/selectors';
import { formatPriceVND } from '../../../utils/common';

const { Panel } = Collapse;

const key = 'home';

function OrderList({ dataGetListOrder, onGetListOrder }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onGetListOrder();
  }, []);

  const formatDate = date => {
    if (!date) return;
    return format(parseISO(date), 'dd/MMM/yyyy HH:MM');
  };

  return (
    <div className="container order-list">
      {!dataGetListOrder?.isFetching &&
        (dataGetListOrder?.data?.length > 0 ? (
          <Collapse defaultActiveKey={['0']} ghost>
            {dataGetListOrder?.data.map((item, index) => (
              <Panel
                header={`Order at ${formatDate(item?.createdAt)}`}
                key={index}
              >
                <div className="row order-list__header">
                  <div className="col-3">
                    <p className="header-item">information</p>
                  </div>
                  <div className="col-3">
                    <p className="header-item">Product</p>
                  </div>
                  <div className="col-2">
                    <p className="header-item">note</p>
                  </div>
                  <div className="col-1">
                    <p className="header-item">Amount</p>
                  </div>
                  <div className="col-2">
                    <p className="header-item">Total Money</p>
                  </div>
                  <div className="col-1">
                    <p className="header-item">METHOD</p>
                  </div>
                </div>
                {item?.orderItems.map((el, indexItem) => (
                  <div className="row order-list__item" key={indexItem}>
                    <div className="col-3">
                      <p className="mx-0">{`${item?.firstname} ${
                        item?.lastname
                      }`}</p>
                      <p className="mx-0">{item.email}</p>
                      <p className="mx-0">{item.mobile}</p>
                      <p className="mx-0">{item.address}</p>
                    </div>
                    <div className="col-3 item-product">
                      <div className="image col-4">
                        <img src={el?.urls[0]?.url || ''} alt="product" />
                      </div>
                      <div className="mx-3 title col-8">
                        <p>{el?.name}</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <p>{item?.content || ''}</p>
                    </div>
                    <div className="col-1">
                      <p>{el?.quantity}</p>
                    </div>
                    <div className="col-2">
                      <p className="money">
                        {`${formatPriceVND(el?.unitPrice?.toString())} `}
                        VND
                      </p>
                    </div>
                    <div className="col-1">{item?.method}</div>
                  </div>
                ))}
              </Panel>
            ))}
          </Collapse>
        ) : (
          <p> There&apos;s nothing here </p>
        ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  dataGetListOrder: makeSelectDataListOrder(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetListOrder: () => dispatch(getListOrder()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(OrderList);
