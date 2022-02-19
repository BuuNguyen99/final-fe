import React from 'react';
import { Link } from 'react-router-dom';
import { Select, Rate } from 'antd';
import PaginationComponent from '../../components/Pagination';
const { Option } = Select;

function PageProductPopular() {
  function handleChange(value) {
    // eslint-disable-next-line no-console
    console.log(`selected ${value}`);
  }

  return (
    <div className="page-product-list">
      <div className="page-product-list__banner">
        <div className="page-product-list">
          <h2 className="page-product-list__title">Popular Products</h2>
          <div className="page-product-list__link">
            <Link to="/" className="link-home">
              Home
            </Link>
            <span className="link-page-product-list link-page">
              &rsaquo;Popular
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
            <Option value="Prices Increase">Prices Increase</Option>
          </Select>
        </div>
        <div className="product-list-item">
          <div className="row">
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
            <div className="col-3 item-show">
              <div className="item">
                <p className="item__sell">Get up to 10% off Today Only!</p>
                <div className="item__image">
                  <img
                    src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
                    alt=""
                  />
                </div>
                <div className="item__infor">
                  <h3 className="title">BLack Iphone Speaker</h3>
                  <p className="price">
                    $ 249.99 / <span className="price-old">$ 249.99</span>
                  </p>
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    disabled
                    className="rating"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-pagination">
          <PaginationComponent
            pageCount={110}
            showLengthData={100}
            activePage={1}
          />
        </div>
      </div>
    </div>
  );
}

export default PageProductPopular;
