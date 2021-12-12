import React from 'react';
import SliderProducts from 'components/SliderProducts';
import { Link } from 'react-router-dom';

function Laptop() {
  const dataLaptop = [
    {
      id: 1,
      image:
        'https://flycamvn.com/wp-content/uploads/2016/12/3879873_Unknown-5-300x162.png',
      name: 'Mavic Pro',
      price: '300',
      salePrice: '299',
    },
    {
      id: 2,
      image:
        'https://flycamvn.com/wp-content/uploads/2017/02/medium_9351802d-9e88-4bb6-979c-48fe81748a33-300x200.png',
      name: 'Inspire',
      price: '300',
      salePrice: '299',
    },
    {
      id: 3,
      image:
        'https://flycamvn.com/wp-content/uploads/2021/10/DJI-Action-2-768x542.jpg',
      name: 'Camera DJI Action 2',
      price: '300',
      salePrice: '299',
    },
    {
      id: 4,
      image:
        'https://flycamvn.com/wp-content/uploads/2018/01/medium_97f02e80-db68-41e0-ba67-e08b751e65e2.jpg',
      name: 'Mavic Air',
      price: '300',
      salePrice: '299',
    },
    {
      id: 5,
      image:
        'https://flycamvn.com/wp-content/uploads/2020/11/656bde48c915f51c1a92f93523a1cc23@large.jpg',
      name: 'DJI Mavic Mini 2',
      price: '300',
      salePrice: '299',
    },
    {
      id: 6,
      image:
        'https://flycamvn.com/wp-content/uploads/2016/11/dji_cp_pt_000312_phantom_4_professional_quadcopter_1235779-1-150x150.jpg',
      name: 'Phantom 4',
      price: '300',
      salePrice: '299',
    },
    {
      id: 7,
      image:
        'https://dji-vietnam.vn/wp-content/uploads/2021/11/DJI-Mavic-3-CINE-1-280x280.jpg',
      name: 'DJI Mavic 3',
      price: '300',
      salePrice: '299',
    },
    {
      id: 8,
      image:
        'https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-5.jpg',
      name: 'Flycam DJI Mini SE',
      price: '300',
      salePrice: '299',
    },
  ];

  return (
    <div className="laptop container">
      <div className="laptop-header">
        <p className="laptop__mark">Laptop & Table</p>
        <h3 className="laptop__title">Popular Laptops And Tablets</h3>
      </div>
      <div className="my-5">
        <SliderProducts data={dataLaptop} />
      </div>
      <div className="laptop__view-all">
        <Link to="/laptop-list" className="cta">
          <span>View all</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5" />
            <polyline points="8 1 12 5 8 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Laptop;
