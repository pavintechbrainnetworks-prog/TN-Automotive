import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-card">
        <div className="loader-scanner"></div>
        <div className="loader-spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
        <p className="loader-text">Loading System Diagnostics...</p>
      </div>
    </div>
  );
};

export default Loader;
