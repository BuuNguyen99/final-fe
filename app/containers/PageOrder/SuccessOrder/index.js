import React from 'react';
import successOrder from 'assets/images/successOrder.jpg';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

function Success() {
  const history = useHistory();
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

export default Success;
