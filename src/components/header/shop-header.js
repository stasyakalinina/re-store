import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css';

const ShopHeader = ({numItems, total}) => {

  return (
    <header className="header">
      <Link to="/">
        <span className="logo text-dark">ReStore</span>
      </Link>
      <nav className="cart">
        <Link to="/">
          <p className="cart-details" href="#">
            <i className="cart-icon fa fa-shopping-cart"></i>
            {numItems} items (${total})
          </p>
        </Link>
      </nav>
    </header>
  )
};

export default ShopHeader;