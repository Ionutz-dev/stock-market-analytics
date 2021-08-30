import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.module.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <NavLink
        exact
        activeClassName={classes.active}
        to="/stock-market-analytics/"
      >
        Home Page
      </NavLink>
    </li>
    <li className={classes.NavigationItem}>
      <NavLink
        activeClassName={classes.active}
        exact
        to="/stock-market-analytics/stock-market"
      >
        Stock Charts
      </NavLink>
    </li>
  </ul>
);

export default navigationItems;
