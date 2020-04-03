import React from 'react';
import withBookstoreService from '../hoc/with-bookstore-service';
import './app.css';

const App = ({bookstoreService}) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
};

export default withBookstoreService()(App);