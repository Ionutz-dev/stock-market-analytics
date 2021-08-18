import React from 'react';

import classes from './Logo.module.css';
import stockLogo from '../../../assets/logo_transparent.png';

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={stockLogo} alt="Logo" />
  </div>
);

export default logo;
