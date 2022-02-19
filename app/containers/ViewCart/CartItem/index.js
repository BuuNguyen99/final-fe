import React from 'react';

function CartItem() {
  return (
    <div className="row order-list__item">
      <div className="col-6 item-product">
        <div className="image col-2">
          <img
            src="https://mega.com.vn/media/product/120_19584_laptop_apple_macbook_pro_myd82saa_space_grey_4.JPG"
            alt="product"
          />
        </div>
        <div className="title col-10">
          <p>
            Laptop Apple Macbook Air 13 (MGND3SA/A) (Apple M1 8-core CPU and
            7-core GPU/8GB RAM/256GB SSD/13.3 inch IPS/Mac OS/Vàng) (NEW)
          </p>
        </div>
      </div>
      <div className="col-2">
        <p className="price">31.000.000 VND</p>
      </div>
      <div className="col-2">
        <p className="amount">1</p>
      </div>
      <div className="col-2">
        <p className="money">31.000.000 VND</p>
      </div>
    </div>
  );
}

export default CartItem;
