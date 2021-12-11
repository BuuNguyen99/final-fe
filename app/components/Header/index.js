import { Popover, Button } from 'antd';
import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { Sticky } from 'react-sticky';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import logo from 'assets/images/logo.png';
import { useDetectOutsideClick } from './useDetectOutsideClick';
import { CookiesStorage } from '../../shared/configs/cookie';

function Header() {
  const history = useHistory();
  const dropdownRef = useRef(null);
  const isAuthen = CookiesStorage.authenticated();

  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  const logout = () => {
    CookiesStorage.clearData();
    history.push('/');
  };

  const content = (
    <div className="products-list">
      <div className="products-item">
        <div className="left">
          <div className="products-item__image">
            <img
              src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
              alt=""
            />
          </div>
          <div className="products-item__contents">
            <p className="title">Flycam</p>
            <small className="quantity muted">x4</small>
          </div>
        </div>
        <p className="products-item__price">$299</p>
      </div>
      <div className="products-item">
        <div className="left">
          <div className="products-item__image">
            <img
              src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
              alt=""
            />
          </div>
          <div className="products-item__contents">
            <p className="title">Flycam</p>
            <small className="quantity muted">x4</small>
          </div>
        </div>
        <p className="products-item__price">$299</p>
      </div>{' '}
      <div className="products-item">
        <div className="left">
          <div className="products-item__image">
            <img
              src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
              alt=""
            />
          </div>
          <div className="products-item__contents">
            <p className="title">Flycam</p>
            <small className="quantity muted">x4</small>
          </div>
        </div>
        <p className="products-item__price">$299</p>
      </div>{' '}
      <div className="products-item">
        <div className="left">
          <div className="products-item__image">
            <img
              src="https://dji-vietnam.vn/wp-content/uploads/2021/07/dji-mini-se-1-400x400.jpg"
              alt=""
            />
          </div>
          <div className="products-item__contents">
            <p className="title">Flycam</p>
            <small className="quantity muted">x4</small>
          </div>
        </div>
        <p className="products-item__price">$299</p>
      </div>
      <div className="view-cart">
        <Button type="primary" danger>
          View Cart
        </Button>
      </div>
    </div>
  );

  return (
    <Sticky>
      {({ style, distanceFromTop }) => (
        <div style={style} className={distanceFromTop && 'unpinned'}>
          <div className="header container">
            <Link className="header__logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="header__navigation-menu">
              <ul className="main-menu">
                <li
                  id="menu-item-6"
                  className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4 current_page_item menu-item-6"
                >
                  <Link to="/" className="link-menu">
                    Home
                  </Link>
                </li>
                <li
                  id="menu-item-16"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16"
                >
                  <a href className="link-menu">
                    product
                  </a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-7"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7"
                    >
                      <a href="/sample-page/">Laptop & table</a>
                    </li>
                    <li
                      id="menu-item-14"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                    >
                      <a href="/sample-page-2/">Flycam</a>
                    </li>
                    <li
                      id="menu-item-14"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                    >
                      <a href="/sample-page-2/">Smartphone</a>
                    </li>
                    <li
                      id="menu-item-14"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                    >
                      <a href="/sample-page-2/">Smartwatch</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-16"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16"
                >
                  <a href className="link-menu">
                    shop
                  </a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-7"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7"
                    >
                      <a href="/sample-page/">Sub Page 1</a>
                    </li>
                    <li
                      id="menu-item-14"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                    >
                      <a href="/sample-page-2/">Sub Page 2</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-77"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"
                >
                  <Link to="/blog" className="link-menu">
                    Blog
                  </Link>
                </li>
                <li
                  id="menu-item-77"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"
                >
                  <Link to="/contact-us" className="link-menu">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__menu-icon">
              <ul className="icon-list">
                <li className="icon-item">
                  <a href="#" className="icon-link">
                    <AiOutlineSearch className="icon icon-search1" />
                  </a>
                </li>
                <li className="icon-item">
                  <a href="#" className="icon-link">
                    <Popover placement="bottomRight" content={content}>
                      <BsCart2 className="icon icon-user" />
                      {isAuthen && <span className="mark">3</span>}
                    </Popover>
                  </a>
                </li>
                <li className="icon-item">
                  <a
                    href
                    className={`icon-link ${isActive ? 'active-icon' : ''}`}
                    onClick={onClick}
                  >
                    <AiOutlineUser className="icon icon-user" />
                    <nav
                      ref={dropdownRef}
                      className={`menu ${isActive ? 'active' : 'inactive'}`}
                    >
                      <ul>
                        {!isAuthen && (
                          <li>
                            <Link to="auth/login">Login</Link>
                          </li>
                        )}
                        {isAuthen && (
                          <li>
                            <Link to="1">My Profile</Link>
                          </li>
                        )}
                        {isAuthen && (
                          <li>
                            <a href className="cursor-pointer" onClick={logout}>
                              Logout
                            </a>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Sticky>
  );
}

export default Header;
