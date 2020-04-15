import React from 'react';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const CartPage = (props) => {
 console.log(props);
  return (
    <section>
      <ShoppingCartTable />
    </section>
  );
};

export default CartPage;