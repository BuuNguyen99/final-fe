import { Popover, Button } from 'antd';
import React, { memo, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { Sticky } from 'react-sticky';
import { AiOutlineUser } from 'react-icons/ai';
import logo from 'assets/images/logo.png';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/Auth/saga';
import reducer from 'containers/Auth/reducer';
import { makeSelectMyProfile } from 'containers/Auth/selectors';
import { getProfile } from 'containers/Auth/actions';
import { CookiesStorage } from '../../shared/configs/cookie';
import { useDetectOutsideClick } from './useDetectOutsideClick';
import { getCartProduct } from '../../containers/Auth/actions';
import { makeSelectCartProduct } from '../../containers/Auth/selectors';
import { formatPriceVND } from '../../utils/common';

const key = 'auth';

function Header({ dataProfile, dataCart, onGetMyProfile, onGetCartProduct }) {
  const history = useHistory();
  const dropdownRef = useRef(null);
  const isAuthen = CookiesStorage.authenticated();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => {
    setIsActive(!isActive);
  };

  const logout = () => {
    CookiesStorage.clearData();
    history.push('/auth/login');
  };

  useEffect(() => {
    onGetMyProfile();
    onGetCartProduct();
  }, []);

  const handleBuyNow = () => {
    history.push('/order-list');
  };

  const content = !dataCart?.isFetching && (
    <div className="products-list">
      {dataCart.data.length > 0 ? (
        <>
          {dataCart.data.map((el, index) => (
            <Link
              to={`/products/${el?.product?.slug}`}
              className="products-item"
              key={`item-p-${index}`}
            >
              <div className="left">
                <div className="products-item__image">
                  <img src={el?.product?.images[0]?.url} alt="" />
                </div>
                <div className="products-item__contents">
                  <p className="title">{el?.product?.title}</p>
                  <small className="quantity muted">x{el?.quantity}</small>
                </div>
              </div>
              <p className="products-item__price">
                {formatPriceVND(el?.unitPrice.toString())} VND
              </p>
            </Link>
          ))}
          <div className="view-cart">
            <Button type="primary" danger onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>
        </>
      ) : (
        'no data'
      )}
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
                      <Link to="/laptop-list">Laptop & table</Link>
                    </li>
                    <li
                      id="menu-item-14"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                    >
                      <Link to="/camera-list">Flycam</Link>
                    </li>
                    <li
                      id="menu-item-14"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                    >
                      <Link to="/smart-phone-list">Smartphone</Link>
                    </li>
                    <li
                      id="menu-item-14"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                    >
                      <Link to="/smart-watch-list">Smartwatch</Link>
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
                {dataProfile?.profile?.account?.roles[0]?.name === 'USER' && (
                  <li className="icon-item">
                    <p className="icon-link">
                      <Popover placement="bottomRight" content={content}>
                        <BsCart2 className="icon icon-user" />
                        {dataCart?.data?.length > 0 && (
                          <span className="mark">{dataCart?.data?.length}</span>
                        )}
                      </Popover>
                    </p>
                  </li>
                )}
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
                        {isAuthen && (
                          <li>
                            <Link to="/my-profile">My Profile</Link>
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

const mapStateToProps = createStructuredSelector({
  dataProfile: makeSelectMyProfile(),
  dataCart: makeSelectCartProduct(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetMyProfile: () => dispatch(getProfile()),
    onGetCartProduct: () => dispatch(getCartProduct()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
