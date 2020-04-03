import React, { Fragment } from 'react';
import './book-item.css';

const BookItem = (props) => {

  const { title, author } = props.book;
  return (
    <Fragment>
      <span>{title}</span>
      <span>{author}</span>
    </Fragment>
  );
}

export default BookItem;