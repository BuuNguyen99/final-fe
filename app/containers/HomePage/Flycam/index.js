import React from 'react';
import { Link } from 'react-router-dom';
import SliderProducts from 'components/SliderProducts';

function FlyCam() {
  const dataFlyCam = [
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
        'https://dji-vietnam.vn/wp-content/uploads/2021/08/DJI-OM-4-SE-800x800.jpg',
      name: 'DJI OM4 SE',
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
    <div className="flycam container">
      <div className="flycam-header">
        <p className="flycam__mark">flycam </p>
        <h3 className="flycam__title">Popular flycams</h3>
      </div>
      <div className="my-5">
        <SliderProducts data={dataFlyCam} />
      </div>
      <div className="flycam__view-all">
        <Link to="/camera-list" className="cta">
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

export default FlyCam;
