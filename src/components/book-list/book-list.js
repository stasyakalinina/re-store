import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookItem from '../book-item/book-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import ErrorIndicator from '../error-indicator/error-indicator';
import { compose } from '../../utils';
import Preloader from '../preloader/preloader';
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Preloader />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookItem book={book}/>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchBooks: () => {
      dispatch(booksRequested());

      ownProps.bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
    }
  }
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
