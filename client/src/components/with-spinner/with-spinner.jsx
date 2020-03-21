import React from 'react';
import GlobalSpinner from '../global-spinner/global-spinner';

function WithSpinner(WrappedComponent) {
  return ({ isLoading, ...otherProps }) =>
    isLoading ? <GlobalSpinner /> : <WrappedComponent {...otherProps} />;
}

export default WithSpinner;
