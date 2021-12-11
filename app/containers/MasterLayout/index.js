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
            <Route path="/products/:id" component={BuyProduct} />
          </Switch>
        </div>
        <Footer />
      </div>
    </StickyContainer>
  );
}
