import React from 'react';
import BookList from '../book-list/book-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const HomePage = () => {

  return (
    <main className="shop" role="main">
      <BookList />
      <ShoppingCartTable />
    </main>
  );
};

export default HomePage;