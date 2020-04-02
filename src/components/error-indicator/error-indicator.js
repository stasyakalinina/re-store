import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <section className="error">
      <h3>Boom!</h3>
      <p>Something has gone terribly wrong</p>
    </section>
  );
};

export default ErrorIndicator;