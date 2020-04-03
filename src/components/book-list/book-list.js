import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookItem from '../book-item/book-item';
import './book-list.css';

class BookList extends Component {

  render() {
    const { books } = this.props;
    return (
      <ul>
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
}

export default connect(mapStateToProps)(BookList);
