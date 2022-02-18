import React, { useState } from 'react';
import clsx from 'clsx';
import {
  BsFillPinMapFill,
  BsChatDots,
  BsTelephonePlus,
  BsFacebook,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
function CircularMenu() {
  const [active, setActive] = useState(false);

  const onToggleClass = () => {
    setActive(!active);
  };
  return (
    <div
      id="circularMenu"
      className={clsx('circular-menu ', active && 'active')}
    >
      <a className="floating-btn" href onClick={onToggleClass}>
        <i className="fa fa-plus" />
      </a>

      <menu className="items-wrapper">
        <Link to="/contact-us" className="menu-item icon-map">
          <BsFillPinMapFill className="icon" />
        </Link>
        <a href="#" className="menu-item icon-message">
          <BsChatDots className="icon" />
        </a>
        <a href="#" className="menu-item icon-phone">
          <BsTelephonePlus className="icon" />
        </a>
        <a href="#" className="menu-item icon-facebook">
          <BsFacebook className="icon" />
        </a>
      </menu>
    </div>
  );
}

export default CircularMenu;
