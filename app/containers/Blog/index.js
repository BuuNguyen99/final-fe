import React from 'react';
import { Link } from 'react-router-dom';
import PaginationComponent from '../../components/Pagination';

function Blog() {
  return (
    <div className="blog">
      <div className="blog__banner">
        <h2 className="blog__title"> Recent News</h2>
        <div className="blog__link">
          <Link to="/" className="link-home">
            Home
          </Link>
          <span className="link-blog"> &rsaquo; Blog</span>
        </div>
      </div>
      <div className="blog-news container">
        <div className="featured-news row">
          <div className="featured-news__hot col-9">
            <div className="image">
              <img
                src="https://dji-vietnam.vn/wp-content/uploads/2021/11/so-sanh-dji-mavic-3-va-dji-mavic-2-pro-3-768x427.jpg"
                alt=""
              />
            </div>
            <div className="featured-news__title-hot">
              <h4 className="title">
                Compare DJI Mavic 3 and DJI Mavic 2 Pro – 2 top flagships
              </h4>
              <div className="is-divider" />
            </div>
          </div>
          <div className="featured-news__normal col-3">
            <div className="normal-1">
              <div className="image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/DJI-hop-tac-voi-AnimaMundi-Ocean-Data-Solutions-1-280x280.jpg"
                  alt=""
                />
              </div>
              <div className="featured-news__title">
                <h4 className="title">
                  Compare DJI Mavic 3 and DJI Mavic 2 Pro – 2 top flagships
                </h4>
                <div className="is-divider" />
              </div>
            </div>
            <div className="normal-2">
              <div className="image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/Melbourne-se-to-chuc-trinh-dien-350-flycam-vao-dem-giao-thua-2022-247x247.jpg"
                  alt=""
                />
              </div>
              <div className="featured-news__title">
                <h4 className="title">
                  Compare DJI Mavic 3 and DJI Mavic 2 Pro – 2 top flagships
                </h4>
                <div className="is-divider" />
              </div>
            </div>
          </div>
        </div>
        <div className="blog-list row">
          <div className="col-3">
            <div className="blog-item">
              <div className="blog-item__image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/danh-gia-mavic-3-768x432.jpg"
                  alt=""
                />
              </div>
              <h4 className="blog-item__title">
                So sánh DJI Mavic 3 và DJI Mavic 2 Pro – 2 flagship hàng đầu
              </h4>
              <p className="blog-item__content">
                DJI Mavic 3 là phiên bản flycam tiếp nối của DJI Mavic Pro 2,
                chiếc máy bay không người lái flagship của DJI vào thời điểm năm
                2018. Cho đến tận bây giờ, Mavic 2 Pro vẫn là một chiếc flycam
                lý tưởng,
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="blog-item">
              <div className="blog-item__image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/danh-gia-mavic-3-768x432.jpg"
                  alt=""
                />
              </div>
              <h4 className="blog-item__title">
                So sánh DJI Mavic 3 và DJI Mavic 2 Pro – 2 flagship hàng đầu
              </h4>
              <p className="blog-item__content">
                DJI Mavic 3 là phiên bản flycam tiếp nối của DJI Mavic Pro 2,
                chiếc máy bay không người lái flagship của DJI vào thời điểm năm
                2018. Cho đến tận bây giờ, Mavic 2 Pro vẫn là một chiếc flycam
                lý tưởng,
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="blog-item">
              <div className="blog-item__image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/danh-gia-mavic-3-768x432.jpg"
                  alt=""
                />
              </div>
              <h4 className="blog-item__title">
                So sánh DJI Mavic 3 và DJI Mavic 2 Pro – 2 flagship hàng đầu
              </h4>
              <p className="blog-item__content">
                DJI Mavic 3 là phiên bản flycam tiếp nối của DJI Mavic Pro 2,
                chiếc máy bay không người lái flagship của DJI vào thời điểm năm
                2018. Cho đến tận bây giờ, Mavic 2 Pro vẫn là một chiếc flycam
                lý tưởng,
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="blog-item">
              <div className="blog-item__image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/danh-gia-mavic-3-768x432.jpg"
                  alt=""
                />
              </div>
              <h4 className="blog-item__title">
                So sánh DJI Mavic 3 và DJI Mavic 2 Pro – 2 flagship hàng đầu
              </h4>
              <p className="blog-item__content">
                DJI Mavic 3 là phiên bản flycam tiếp nối của DJI Mavic Pro 2,
                chiếc máy bay không người lái flagship của DJI vào thời điểm năm
                2018. Cho đến tận bây giờ, Mavic 2 Pro vẫn là một chiếc flycam
                lý tưởng,
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="blog-item">
              <div className="blog-item__image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/danh-gia-mavic-3-768x432.jpg"
                  alt=""
                />
              </div>
              <h4 className="blog-item__title">
                So sánh DJI Mavic 3 và DJI Mavic 2 Pro – 2 flagship hàng đầu
              </h4>
              <p className="blog-item__content">
                DJI Mavic 3 là phiên bản flycam tiếp nối của DJI Mavic Pro 2,
                chiếc máy bay không người lái flagship của DJI vào thời điểm năm
                2018. Cho đến tận bây giờ, Mavic 2 Pro vẫn là một chiếc flycam
                lý tưởng,
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="blog-item">
              <div className="blog-item__image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/danh-gia-mavic-3-768x432.jpg"
                  alt=""
                />
              </div>
              <h4 className="blog-item__title">
                So sánh DJI Mavic 3 và DJI Mavic 2 Pro – 2 flagship hàng đầu
              </h4>
              <p className="blog-item__content">
                DJI Mavic 3 là phiên bản flycam tiếp nối của DJI Mavic Pro 2,
                chiếc máy bay không người lái flagship của DJI vào thời điểm năm
                2018. Cho đến tận bây giờ, Mavic 2 Pro vẫn là một chiếc flycam
                lý tưởng,
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="blog-item">
              <div className="blog-item__image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/danh-gia-mavic-3-768x432.jpg"
                  alt=""
                />
              </div>
              <h4 className="blog-item__title">
                So sánh DJI Mavic 3 và DJI Mavic 2 Pro – 2 flagship hàng đầu
              </h4>
              <p className="blog-item__content">
                DJI Mavic 3 là phiên bản flycam tiếp nối của DJI Mavic Pro 2,
                chiếc máy bay không người lái flagship của DJI vào thời điểm năm
                2018. Cho đến tận bây giờ, Mavic 2 Pro vẫn là một chiếc flycam
                lý tưởng,
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="blog-item">
              <div className="blog-item__image">
                <img
                  src="https://dji-vietnam.vn/wp-content/uploads/2021/11/danh-gia-mavic-3-768x432.jpg"
                  alt=""
                />
              </div>
              <h4 className="blog-item__title">
                So sánh DJI Mavic 3 và DJI Mavic 2 Pro – 2 flagship hàng đầu
              </h4>
              <p className="blog-item__content">
                DJI Mavic 3 là phiên bản flycam tiếp nối của DJI Mavic Pro 2,
                chiếc máy bay không người lái flagship của DJI vào thời điểm năm
                2018. Cho đến tận bây giờ, Mavic 2 Pro vẫn là một chiếc flycam
                lý tưởng,
              </p>
            </div>
          </div>
        </div>
        <div className="blog-pagination">
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

export default Blog;
