import React from 'react';
import './book-item.css';

const BookItem = ({book, onAddedToCart}) => {

  const { title, author, price, coverImage } = book;
  return (
    <div className="book-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <p className="book-author">{author}</p>
        <p className="book-price">${price}</p>
        <button
          className="btn btn-info book-btn"
          onClick={onAddedToCart}>
            Add to cart</button>
      </div>
    </div>
  );
}

export default BookItem;