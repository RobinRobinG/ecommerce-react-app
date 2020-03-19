import React from 'react';
import './global-spinner.scss';

const GlobalSpinner = props => {
  return (
    <div className="global-spinner-overlay">
      <p>Loading...</p>
    </div>
  );
};

export default GlobalSpinner;
