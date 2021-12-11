import React from 'react';
import { Input, Button } from 'antd';

function UserContact() {
  return (
    <div className="user-contact">
      <div className="container">
        <div className="row user-contact__section">
          <div className="user-contact__content col-4">
            <p className="user-contact__mark">user contact</p>
            <h3 className="user-contact__title">
              Contact Us for those interested
            </h3>
            <p className="user-contact__text">
              The standard chunk of Lorem Ipsum used since the is reproduced
              below for those interested
            </p>
          </div>
          <div className="col-4" />
          <div className="user-contact col-4">
            <Input.Group className="address">
              <Input className="input" placeholder="Enter your email address" />
              <Button type="primary" className="button-address">
                subscribe
              </Button>
            </Input.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserContact;
