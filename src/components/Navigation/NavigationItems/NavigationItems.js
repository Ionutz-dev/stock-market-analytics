import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.module.css';

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <NavLink exact to="/" activeClassName={classes.active}>
        Home Page
      </NavLink>
    </li>
    <li className={classes.NavigationItem}>
      <NavLink exact to="/market-charts" activeClassName={classes.active}>
        Stock Charts
      </NavLink>
    </li>
  </ul>
);

export default navigationItems;
