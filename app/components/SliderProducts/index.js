import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function SliderProducts({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 1500,
  };
  return (
    <div className="row slider">
      <Slider {...settings}>
        {data.map((el, index) => (
          <div className="section-show col-3" key={`laptop-item-${index}`}>
            <Link to={`/products/${el.slug}`}>
              <div className="p-item">
                <div className="image">
                  <img src={el.images[0]?.url} alt="" />
                </div>
                <div className="show-item">
                  <h4 className="title">{el.title}</h4>
                  <span className="money-sale">{el.price} VND</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderProducts;
