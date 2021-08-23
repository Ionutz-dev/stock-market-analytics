import React from 'react';

import classes from './SideDrawer.module.css';

import { NavLink } from 'react-router-dom';

interface propsType {
  open: boolean;
  closed(): void;
}

const sideDrawer = (props: propsType) => {
  let attachedClasses = [classes.sidenav, classes.Closed];

  if (props.open) {
    attachedClasses = [classes.sidenav, classes.Open];
  }

  return (
    <div>
      {props.open ? (
        <div className={classes.Backdrop} onClick={props.closed}></div>
      ) : null}
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <NavLink
          exact
          to="/"
          activeClassName={classes.active}
          className={classes.link}
        >
          HOME PAGE
        </NavLink>
        <NavLink
          exact
          to="/market-charts"
          activeClassName={classes.active}
          className={classes.link}
        >
          STOCK CHARTS
        </NavLink>
      </div>
    </div>
  );
};

export default sideDrawer;
