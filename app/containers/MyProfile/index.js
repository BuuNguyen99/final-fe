/* eslint-disable no-nested-ternary */
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import {
  makeSelectMyProfile,
  makeSelectUpdateMyProfile,
  makeSelectChangePasswordAccount,
  makeSelectAddProduct,
} from 'containers/Auth/selectors';
import {
  updateProfile,
  changePasswordAccount,
  addProductItem,
} from 'containers/Auth/actions';
import avatarDefault from 'assets/images/avatarDefault.png';
import ChangeInfo from './ChangeInfo';
import ChangePassword from './ChangePassword';
import ProductManagement from './ProductManagement';
import AccountManagement from './AccountManagement';

const { TabPane } = Tabs;

function MyProfile({
  dataProfile,
  dataUpdateProfile,
  onUpdateProfile,
  dataChangePassword,
  onChangePasswordAccount,
  dataAddProduct,
  onAddProductItem,
}) {
  return (
    <div className="my-profile">
      <div className="page-product-list__banner">
        <div className="page-product-list">
          <h2 className="page-product-list__title">My Profile</h2>
          <div className="page-product-list__link">
            <Link to="/" className="link-home">
              Home
            </Link>
            <span className="link-page-product-list link-page">
              &rsaquo; Profile
            </span>
          </div>
        </div>
      </div>
      <div className=" my-profile__info">
        <div className="information">
          <div className="container">
            <div className="row">
              <div className="col-3" />
              <div className="col-9 content">
                <div className="avatar">
                  <img
                    src={dataProfile?.profile?.linkAvatar || ''}
                    alt="avatar"
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = avatarDefault;
                    }}
                  />
                </div>
                <div className="info-text">
                  <h3>
                    {`${dataProfile?.profile?.firstname} ${
                      dataProfile?.profile?.lastname
                    }`}
                  </h3>
                  <p className="username">
                    @{dataProfile?.profile?.account?.username}
                  </p>
                  <div className="info-text__item">
                    <p>
                      <strong>Gender</strong>
                      {dataProfile?.profile?.gender === true
                        ? 'Male'
                        : dataProfile?.profile?.gender === false
                        ? 'Female'
                        : '-'}
                    </p>
                    <p>
                      <strong>Date of birth</strong>
                      {dataProfile?.profile?.birthday || '-'}
                    </p>
                  </div>
                  <div className="info-text__item">
                    <p>
                      <strong>Phone</strong>
                      {dataProfile?.profile?.mobile || '-'}
                    </p>
                    <p>
                      <strong>Address</strong>
                      {dataProfile?.profile?.address || '-'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" container tabs-profile">
          <Tabs defaultActiveKey="1">
            <TabPane tab="My Account" key="1">
              <ChangeInfo
                profile={dataProfile?.profile}
                dataUpdateProfile={dataUpdateProfile}
                onUpdateProfile={onUpdateProfile}
              />
            </TabPane>
            <TabPane tab="Change Password" key="2">
              <ChangePassword
                dataChangePassword={dataChangePassword}
                onChangePasswordAccount={onChangePasswordAccount}
              />
            </TabPane>
            {dataProfile?.profile?.account?.roles[0]?.name === 'USER' && (
              <TabPane tab="List of orders placed" key="3">
                There&apos;s nothing here
              </TabPane>
            )}
            {dataProfile?.profile?.account?.roles[0]?.name === 'ADMIN' && (
              <TabPane tab="Product Management" key="5">
                <ProductManagement
                  dataAddProduct={dataAddProduct}
                  onAddProductItem={onAddProductItem}
                />
              </TabPane>
            )}
            {dataProfile?.profile?.account?.roles[0]?.name === 'ADMIN' && (
              <TabPane tab="Account Management" key="6">
                <AccountManagement />
              </TabPane>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  dataProfile: makeSelectMyProfile(),
  dataUpdateProfile: makeSelectUpdateMyProfile(),
  dataChangePassword: makeSelectChangePasswordAccount(),
  dataAddProduct: makeSelectAddProduct(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateProfile: (data, callBack) =>
      dispatch(updateProfile(data, callBack)),
    onChangePasswordAccount: (data, callBack) =>
      dispatch(changePasswordAccount(data, callBack)),
    onAddProductItem: (data, callBack) =>
      dispatch(addProductItem(data, callBack)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MyProfile);
