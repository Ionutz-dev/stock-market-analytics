import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.ErrorPage}>
      <h1 className={classes.ErrorHeading}>404</h1>
      <h2 className={classes.ErrorText}>
        The page you were looking for doesn't exist
      </h2>
      <NavLink to="/" className={classes.ErrorBtn}>
        Go to home page
      </NavLink>
    </div>
  );
};

export default NotFound;
