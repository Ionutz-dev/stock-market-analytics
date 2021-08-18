import React from 'react';

import classes from './LoadingSpinner.module.css';

const loadingSpinner = props => (
  <div className={classes['lds-default']}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default loadingSpinner;
