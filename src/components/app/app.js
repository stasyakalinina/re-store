import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CartPage, HomePage } from '../pages';
import ShopHeader from '../shop-header/shop-header';
import './app.css';

const App = () => {
  return (
    <div className="container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path='/cart' component={CartPage}/>
    </Switch>
    </div>
  )
};

export default App;