import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = (props) => {

  return (
    <section className="shopping-cart">
      <h2>Your Order</h2>
      <table className="shopping-cart__table table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>$40</td>
            <td className="shopping-cart__action">
              <button className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o" />
              </button>
              <button className="btn btn-outline-success btn-sm">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="total">
        Total: $201
      </p>
    </section>
  );
};

export default ShoppingCartTable;