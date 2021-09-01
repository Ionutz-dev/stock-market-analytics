import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './LandingPage.module.css';

const landingPage = () => {
  return (
    <div className={classes['Background-Container']}>
      <div className={classes.Background}></div>
      <div className={classes.Overlay}></div>
      <div className={classes.container}>
        <div className={classes.Left}>
          <div className={classes.InfoContainer}>
            <div className={classes.TitleUp}>STOCK MARKET</div>
            <div className={classes.TitleDown}>ANALYTICS</div>
            <hr className={classes.Line} />
            <div className={classes.Text}>
              Watch live charts of the most popular stocks and get into the
              world of trading
            </div>
            <NavLink to="/stock-market" className={classes.StartBtn}>
              GET STARTED
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
