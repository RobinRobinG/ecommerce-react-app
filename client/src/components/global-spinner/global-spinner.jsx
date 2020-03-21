import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const GlobalSpinner = props => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default GlobalSpinner;
