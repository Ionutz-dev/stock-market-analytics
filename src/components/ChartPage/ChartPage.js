import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Chart from './Chart/Chart';
import SelectMenu from './SelectMenu/SelectMenu';

import classes from './ChartPage.module.css';

import { fetchChartData } from '../../store/chartData-actions';

const MarketChart = () => {
  const dispatch = useDispatch();

  const currStock = useSelector(state => state.chart.currStock);
  const currTimeRange = useSelector(state => state.chart.currTimeRange);
  const stockPrice = useSelector(state => state.chart.stockPrice);
  const isLoading = useSelector(state => state.chart.isLoading);
  const error = useSelector(state => state.chart.error);

  useEffect(() => {
    dispatch(fetchChartData({ currStock, currTimeRange }));
  }, [dispatch, currStock, currTimeRange]);

  let content = (
    <div className={classes.ChartZone}>
      <h1>{`${currStock.name} Inc`}</h1>
      <h2>{!isLoading ? `${stockPrice} USD` : `Price is loading`}</h2>
      <Chart />
    </div>
  );

  if (error) {
    content = (
      <div className={`${classes.ChartZone} ${classes.HttpError}`}>
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div className={classes.MarketContainer}>
      <div className={classes.LeftContainer}></div>
      {content}
      <div className={classes.InfoContainer}></div>
      <div className={classes.InfoZone}>
        <SelectMenu
          title={'Stock'}
          options={['AAPL', 'AMZN', 'FB', 'GOOGL', 'MSFT', 'NFLX', 'TSLA']}
        />
        <SelectMenu
          title={'Range'}
          options={['1d', '5d', '1mo', '6mo', '1y', '5y']}
        />
      </div>
    </div>
  );
};

export default MarketChart;
