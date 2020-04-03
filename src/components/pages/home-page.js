import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () => {

  return (
    <section>
      <h2>Home Page</h2>
      <BookList books={[]}/>
    </section>
  );
};

export default HomePage;