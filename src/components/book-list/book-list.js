import React, { Component } from 'react';
import BookItem from '../book-item/book-item';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import withBookstoreService from '../hoc/with-bookstore-service';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';

import ErrorIndicator from '../error-indicator/error-indicator';
import Preloader from '../preloader/preloader';
import './book-list.css';

const BookList = (props) => {
  const { books, onAddedToCart } = props;

  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}/>
            </li>
          )
        })
      }
    </ul>
  );
};
class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Preloader />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
  }
}

const mapStateToProps = (state) => {
  const { bookList: {books, loading, error } } = state;
  return {
    books,
    loading,
    error,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart,
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
