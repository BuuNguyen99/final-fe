import React from 'react';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import Header from 'components/Header';
import AsideMenu from 'components/AsideMenu';
import Footer from 'components/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import Blog from 'containers/Blog';
import ContactUs from 'containers/ContactUs';
import BuyProduct from 'containers/BuyProduct';
import PageProductListLapTop from 'containers/PageProductListLaptop';
import PageProductListSmartPhone from 'containers/PageProductListSmartPhone';
import PageProductListSmartWatch from 'containers/PageProductListSmartWatch';
import PageProductListCamera from 'containers/PageProductListCamera';
import MyProfile from 'containers/MyProfile';
import PageProductPopular from 'containers/PageProductPopular';
import ViewCart from 'containers/ViewCart';
import SuccessOrder from 'containers/PageOrder/SuccessOrder';
import ErrorOrder from 'containers/PageOrder/ErrorOrder';

export default function MasterLayout() {
  return (
    <StickyContainer>
      <div className="d-flex flex-column flex-root">
        <Helmet titleTemplate="%s">
          <meta name="description" content="RS Evaluation System" />
        </Helmet>
        <AsideMenu />
        <Header />
        <div className="main">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/blog" component={Blog} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/products/:slug" component={BuyProduct} />
            <Route path="/laptop-list" component={PageProductListLapTop} />
            <Route
              path="/smart-phone-list"
              component={PageProductListSmartPhone}
            />
            <Route
              path="/smart-watch-list"
              component={PageProductListSmartWatch}
            />
            <Route path="/camera-list" component={PageProductListCamera} />
            <Route path="/popular-list" component={PageProductPopular} />
            <Route path="/order-list" component={ViewCart} />
            <Route path="/my-profile" component={MyProfile} />
            <Route path="/order/success" component={SuccessOrder} />
            <Route path="/order/error" component={ErrorOrder} />
          </Switch>
        </div>
        <Footer />
      </div>
    </StickyContainer>
  );
}
