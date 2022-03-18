import React, { memo, useEffect } from 'react';
import successOrder from 'assets/images/successOrder.jpg';
import { Button } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import saga from 'containers/Auth/saga';
import reducer from 'containers/Auth/reducer';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { buyBank } from '../../Auth/actions';

const key = 'auth';

function Success({ onBuyBank }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const history = useHistory();

  const { search } = useLocation();
  const vnp_TxnRef = new URLSearchParams(search).get('vnp_TxnRef');
  const vnp_TransactionStatus = new URLSearchParams(search).get(
    'vnp_TransactionStatus',
  );

  useEffect(() => {
    if (vnp_TransactionStatus || vnp_TxnRef) {
      const data = { vnp_TransactionStatus, vnp_TxnRef };
      onBuyBank(data);
    }
  }, [vnp_TransactionStatus, vnp_TxnRef]);

  return (
    <div className="page-order success-order container">
      <div className="order-success">
        <img src={successOrder} alt="" />
      </div>
      <div className="order-content">
        <h3>Order successfully issued!</h3>
        <p>Your order was successfully. Please back to home page</p>
        <Button type="primary" danger onClick={() => history.replace('/')}>
          Go Back Home
        </Button>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onBuyBank: data => dispatch(buyBank(data)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Success);
