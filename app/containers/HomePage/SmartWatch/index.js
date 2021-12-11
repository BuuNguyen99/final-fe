import React from 'react';
import SliderProducts from 'components/SliderProducts';

function SmartWatch() {
  const dataSmartwatch = [
    {
      id: 1,
      image:
        'https://www.fitbit.com/global/content/dam/fitbit/global/pdp/versa2/device-360/black-carbon-aluminum/prod0.png',
      name: 'Versa 2',
      price: '179.95',
      salePrice: '119.95',
    },
    {
      id: 2,
      image:
        'https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/sense/hero-static/sage-grey/sense-sage-gray-device-front.png',
      name: 'Sense',
      price: '299.95',
      salePrice: '199.95',
    },
    {
      id: 3,
      image:
        'https://cdn.hoanghamobile.com/i/preview/Uploads/2021/11/27/image-removebg-preview-1.png',
      name: 'Amazfit GTR 3',
      price: '300',
      salePrice: '299',
    },
    {
      id: 4,
      image:
        'https://cdn.hoanghamobile.com/i/preview/Uploads/2021/11/26/gold.png',
      name: 'Apple Watch Series 7 (4G) 41mm',
      price: '300',
      salePrice: '299',
    },
    {
      id: 5,
      image:
        'https://cdn.hoanghamobile.com/i/preview/Uploads/2021/11/25/image-removebg-preview-3.png',
      name: 'Huawei Watch GT3',
      price: '300',
      salePrice: '299',
    },
    {
      id: 6,
      image:
        'https://cdn.hoanghamobile.com/i/preview/Uploads/2021/08/20/watch-4-classic-5.png',
      name: 'Fenix 6s Silver with Black Band',
      price: '300',
      salePrice: '299',
    },
    {
      id: 7,
      image:
        'https://dji-vietnam.vn/wp-content/uploads/2021/11/DJI-Mavic-3-CINE-1-280x280.jpg',
      name: 'Samsung Galaxy Watch 4 Classic BT 46mm',
      price: '300',
      salePrice: '299',
    },
    {
      id: 8,
      image:
        'https://cdn.hoanghamobile.com/i/preview/Uploads/2021/06/21/pro2.png',
      name: 'Huawei Watch 3 Pro',
      price: '300',
      salePrice: '299',
    },
  ];

  return (
    <div className="smart-watch container">
      <div className="smart-watch-header">
        <p className="smart-watch__mark">smartwatch </p>
        <h3 className="smart-watch__title">Popular smartwatch</h3>
      </div>
      <div className="my-5">
        <SliderProducts data={dataSmartwatch} />
      </div>
      <div className="smart-watch__view-all">
        <a href="#" className="cta">
          <span>View all</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5" />
            <polyline points="8 1 12 5 8 9" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default SmartWatch;
