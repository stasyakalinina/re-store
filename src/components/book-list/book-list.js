import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookItem from '../book-item/book-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import { booksLoaded, booksRequested } from '../../actions';
import Preloader from '../preloader/preloader';
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Preloader />
    } else {
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
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded,
    booksRequested
  }, dispatch)
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList));
