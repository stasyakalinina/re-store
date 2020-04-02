import React from 'react';
import './app.css';
import ErrorBoundry from '../error-boundry/error-boundry';
import { BookstoreServiceProvider } from '../bookstore-service-context/bookstore-service-context';

const App = () => {
  return (
    <ErrorBoundry>
      <BookstoreServiceProvider>
      <div>
        <h1>Hello</h1>
      </div>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  )
};

export default App;