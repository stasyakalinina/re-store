import React from 'react';
import './preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">Loading...
      <div className="preloader-outter"></div>
      <div className="preloader-inner"></div>
    </div>
  );
};

export default Preloader;