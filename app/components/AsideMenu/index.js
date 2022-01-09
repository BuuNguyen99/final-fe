import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsWatch, BsLaptop, BsPhoneVibrate } from 'react-icons/bs';

function AsideMenu() {
  return (
    <div className="aside-menu">
      <ul className="aside-menu__list">
        <li className="aside-menu__item">
          <div className="con-tooltip right">
            <Link to="/laptop-list" className="link-icon">
              <BsLaptop className="icon-aside" />
            </Link>
            <div className="tooltip">
              <p>Laptop & Table</p>
            </div>
          </div>
        </li>
        <li className="aside-menu__item">
          <div className="con-tooltip right">
            <Link to="/camera-list" className="link-icon">
              <AiOutlineCamera className="icon-aside" />
            </Link>
            <div className="tooltip">
              <p>Camera & Flycam</p>
            </div>
          </div>
        </li>
        <li className="aside-menu__item">
          <div className="con-tooltip right">
            <Link to="/smart-watch-list" className="link-icon">
              <BsWatch className="icon-aside" />
            </Link>
            <div className="tooltip">
              <p>Smartwatch</p>
            </div>
          </div>
        </li>
        <li className="aside-menu__item">
          <div className="con-tooltip right">
            <Link to="/smart-phone-list" className="link-icon">
              <BsPhoneVibrate className="icon-aside" />
            </Link>

            <div className="tooltip">
              <p>Smartphone</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AsideMenu;
