import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import ToggleBtn from '../SideDrawer/ToogleBtn/ToogleBtn';

interface propsType {
  drawerHandler(): void;
}

const toolbar = (props: propsType) => (
  <header className={classes.Toolbar}>
    <ToggleBtn clicked={props.drawerHandler} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
