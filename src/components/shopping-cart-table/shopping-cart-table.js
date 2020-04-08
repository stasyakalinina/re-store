import React from 'react';
import { connect } from 'react-redux';
import './shopping-cart-table.css';

const ShoppingCartTable = ({items, totalPriceOrder, onIncrease, onDecrease, onDelete}) => {

  const renderRow = (item, index) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td className="table__name">{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td className="shopping-cart__action">
          <button
            onClick={()=> onIncrease(id)}
            className="btn btn-outline-success btn-sm">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={()=> onDecrease(id)}
            className="btn btn-outline-warning btn-sm">
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={()=> onDelete(id)}
            className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <section className="shopping-cart">
      <h2>Your Order</h2>
      <table className="shopping-cart__table table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Order price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>
      <p className="total">
        Total: ${totalPriceOrder}
      </p>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    totalPriceOrder: state.orderTotal
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`Increase ${id}`);
    },
    onDecrease:(id) => {
      console.log(`Decrease ${id}`);
    },
    onDelete: (id) => {
      console.log(`Delete ${id}`);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);