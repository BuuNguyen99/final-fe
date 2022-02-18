import React from 'react';
import NewShop from './NewShop';
import UserContact from './UserContact';
import NewProducts from './NewProducts';
import Laptop from './Laptop';
import SmartPhone from './SmartPhone';
import SmartWatch from './SmartWatch';
import FlyCam from './Flycam';

function HomePage() {
  return (
    <div className="home-page">
      <NewProducts />
      <Laptop />
      <FlyCam />
      <SmartPhone />
      <SmartWatch />
      <NewShop />
      <UserContact />
    </div>
  );
}

export default HomePage;
