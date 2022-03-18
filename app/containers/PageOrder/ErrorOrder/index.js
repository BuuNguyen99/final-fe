import React from 'react';
import { useHistory } from 'react-router-dom';
import errorOrder from 'assets/images/errorOrder.jpg';
import { Button } from 'antd';

function Error() {
  const history = useHistory();
  return (
    <div className="page-order success-order container">
      <div className="order-success">
        <img src={errorOrder} alt="" />
      </div>
      <div className="order-content">
        <h3>Order failure issued!</h3>
        <p>Your order was failure. Please back to home page</p>
        <Button type="primary" danger onClick={() => history.replace('/')}>
          Go Back Home
        </Button>
      </div>
    </div>
  );
}

export default Error;
