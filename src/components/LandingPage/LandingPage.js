import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './LandingPage.module.css';

const landingPage = props => {
  return (
    <div className={classes['Background-Container']}>
      <div className={classes.Background}></div>
      <div className={classes.Overlay}></div>
      <div className={classes.container}>
        <div className={classes.Left}>
          <div className={classes.InfoContainer}>
            <div
              style={{
                color: '#CDCDCD',
                fontWeight: '700',
                textAlign: 'left',
              }}
            >
              STOCK MARKET
            </div>
            <div
              style={{
                marginTop: '2px',
                marginLeft: '0px',
                marginBottom: '50px',
                textAlign: 'left',
              }}
              className={classes.Analytics}
            >
              ANALYTICS
            </div>
            <hr className={classes.Line} />
            <div className={classes.Text}>
              Watch live charts of the most popular stocks and get into the
              world of trading
            </div>
            <NavLink to="/market-charts" className={classes.Start}>
              GET STARTED
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
