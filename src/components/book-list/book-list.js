import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookItem from '../book-item/book-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import { booksLoaded } from '../../actions';
import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService } = this.props;
    let data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;

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
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded
  }, dispatch)
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList));
