import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { CartPage, HomePage } from '../pages';
import ShopHeader from '../shop-header/shop-header';
import './app.css';

const App = (props) => {
  const { cartItems, orderTotal } = props;
  let sum = cartItems.reduce((sum, elem) => sum + elem.count, 0);

  return (
    <div className="container">
      <ShopHeader numItems={sum} total={orderTotal ? orderTotal : 0}/>
      <Switch>
        <Route
          path={process.env.PUBLIC_URL + '/'}
          component={HomePage}
          exact />
        <Route
          path={process.env.PUBLIC_URL + '/cart'}
          component={CartPage} />
      </Switch>
    </div>
  )
};

const mapStateToProps = (state) => {
  const { cartItems, orderTotal } = state.shoppingCart;
  return {
    cartItems,
    orderTotal
  }
}

export default connect(mapStateToProps)(App);