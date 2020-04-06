import React from 'react';
import './book-item.css';

const BookItem = (props) => {

  const { title, author, price, coverImage } = props.book;
  return (
    <div className="book-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <p className="book-author">{author}</p>
        <p className="book-price">${price}</p>
        <button className="btn btn-info book-btn">Add to cart</button>
      </div>
    </div>
  );
}

export default BookItem;