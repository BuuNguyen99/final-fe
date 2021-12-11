import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsWatch, BsLaptop, BsPhoneVibrate } from 'react-icons/bs';
function AsideMenu() {
  return (
    <div className="aside-menu">
      <ul className="aside-menu__list">
        <li className="aside-menu__item">
          <div className="con-tooltip right">
            <BsLaptop className="icon-aside" />
            <div className="tooltip">
              <p>Laptop & Table</p>
            </div>
          </div>
        </li>
        <li className="aside-menu__item">
          <div className="con-tooltip right">
            <AiOutlineCamera className="icon-aside" />
            <div className="tooltip">
              <p>Camera & Flycam</p>
            </div>
          </div>
        </li>
        <li className="aside-menu__item">
          <div className="con-tooltip right">
            <BsWatch className="icon-aside" />
            <div className="tooltip">
              <p>Smartwatch</p>
            </div>
          </div>
        </li>
        <li className="aside-menu__item">
          <div className="con-tooltip right">
            <BsPhoneVibrate className="icon-aside" />
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
