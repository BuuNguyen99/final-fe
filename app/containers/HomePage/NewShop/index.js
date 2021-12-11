import React from 'react';
import { Rate } from 'antd';

function NewShop() {
  return (
    <div className="new-shop container">
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
                $ 249.99 / <span className="money">$ 249.99</span>
              </span>
              <div className="rate">
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  disabled
                  className="rating"
                />
              </div>
            </div>
            <img
              src="https://cdn.hoanghamobile.com/i/preview/Uploads/2021/01/07/gps-nhom-silver.png"
              alt=""
            />
          </div>
          <div className="new-shop__item-product item-2">
            <div className="show-top">
              <span className="money-sale">
                $ 249.99 / <span className="money">$ 249.99</span>
              </span>
              <div className="rate">
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  disabled
                  className="rating"
                />
              </div>
            </div>
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-cell-purple-202109?wid=940&hei=1112&fmt=png-alpha&.v=1629840724000"
              alt=""
            />
          </div>
        </div>
        <div className="new-shop__item col-4">
          <div className="new-shop__item-product item-3">
            <div className="show-top">
              <span className="money-sale">
                $ 249.99 / <span className="money">$ 249.99</span>
              </span>
              <div className="rate">
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  disabled
                  className="rating"
                />
              </div>
            </div>
            <img
              src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
              alt=""
            />
          </div>
          <div className="new-shop__item-product item-4">
            <div className="show-top">
              <span className="money-sale">
                $ 249.99 / <span className="money">$ 249.99</span>
              </span>
              <div className="rate">
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  disabled
                  className="rating"
                />
              </div>
            </div>
            <img
              src="https://loaaudio.com/wp-content/uploads/2020/07/marshall-Emberton-Bluetooth.png"
              alt=""
            />
          </div>
          <div className="new-shop__item-product item-5">
            <div className="show-top">
              <span className="money-sale">
                $ 249.99 / <span className="money">$ 249.99</span>
              </span>
              <div className="rate">
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  disabled
                  className="rating"
                />
              </div>
            </div>
            <img
              src="https://hc.com.vn/i/ecommerce/media/GS.007152_FEATURE_74775.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="new-shop__item col-4">
          <div className="new-shop__item-product item-6">
            <div className="show-top">
              <span className="money-sale">
                $ 249.99 / <span className="money">$ 249.99</span>
              </span>
              <div className="rate">
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  disabled
                  className="rating"
                />
              </div>
            </div>
            <img
              src="https://product.hstatic.net/1000300544/product/iphone-13-pink-select-2021_d3ad549275cd49f4aef49722410002e5_grande.png"
              alt=""
            />
          </div>
          <div className="new-shop__item-product item-7">
            <div className="show-top">
              <span className="money-sale">
                $ 249.99 / <span className="money">$ 249.99</span>
              </span>
              <div className="rate">
                <Rate
                  allowHalf
                  defaultValue={2.5}
                  disabled
                  className="rating"
                />
              </div>
            </div>
            <img
              src="https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw6b782c73/images/marshall/headphones/major-iv/medium/cart-marshall-major-iv-black.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewShop;
