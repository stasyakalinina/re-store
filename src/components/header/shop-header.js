import React from 'react';
import './shop-header.css';

const ShopHeader = ({numItems, total}) => {

  return (
    <header className="header">
      <a className="logo text-dark" href="#">ReStore</a>
      <nav className="cart">
        <a className="cart-link" href="#">
          <i className="cart-icon fa fa-shopping-cart"></i>
          {numItems} items (${total})
        </a>
      </nav>
    </header>
  )
};

export default ShopHeader;