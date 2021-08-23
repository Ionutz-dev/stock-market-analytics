import React from 'react';

import classes from './Logo.module.css';
import stockLogo from '../../../assets/logo_transparent.png';

const logo = () => (
  <div className={classes.Logo}>
    <img src={stockLogo} alt="Logo" />
  </div>
);

export default logo;
