import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

import classes from './ChartPage.module.css';

import Chart from './Chart/Chart';
import SelectMenu from './SelectMenu/SelectMenu';

import { fetchChartData } from '../../store/chartData-actions';

const MarketChart = () => {
  const dispatch = useAppDispatch();

  const currStock = useAppSelector(state => state.chart.currStock);
  const currTimeRange = useAppSelector(state => state.chart.currTimeRange);
  const stockPrice = useAppSelector(state => state.chart.stockPrice);
  const isLoading = useAppSelector(state => state.chart.isLoading);
  const error = useAppSelector(state => state.chart.error);

  useEffect(() => {
    // dispatch(fetchChartData({ currStock, currTimeRange }));
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
      <div className={classes.InfoContainer}>
        <div className={classes.InfoZone}>
          <SelectMenu
            title={'Stock'}
            options={['AAPL', 'AMZN', 'FB', 'GOOGL', 'MSFT', 'NFLX', 'TSLA']}
          />
          <SelectMenu
            title={'Range'}
            options={['1d', '5d', '1m', '6m', '1y', '5y', 'max']}
          />
        </div>
      </div>
    </div>
  );
};

export default MarketChart;
