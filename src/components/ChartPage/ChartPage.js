import React, { useState, useEffect } from 'react';

import Chart from './Chart/Chart';
import Dropdown from './SelectMenu/SelectMenu';
import axios from 'axios';

import classes from './ChartPage.module.css';

const MarketChart = () => {
  const [chartData, setChartData] = useState(null);
  const [currStock, setCurrStock] = useState({
    name: 'Apple',
    symbol: 'AAPL',
  });
  const [timestamps, setTimestamps] = useState([]);
  const [stockPrice, setStockPrice] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currTimeRange, setCurrTimeRange] = useState({
    range: '1mo',
    interval: '1d',
  });
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchChart = async () => {
      const options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts',
        params: {
          symbol: currStock.symbol,
          interval: currTimeRange.interval,
          range: currTimeRange.range,
          region: 'US',
          comparisons: '^GDAXI,^FCHI',
        },
        headers: {
          'x-rapidapi-key':
            '41f084f51cmsh2fce017f88a0c79p175ce0jsn2d11f1030e8c',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);

      if (response.statusText !== 'OK') {
        throw new Error('Something went wrong');
      }

      const quotes = response.data.chart.result[0].indicators.quote[0].close;
      const timestamps = response.data.chart.result[0].timestamp;

      const prices = [];

      for (let i = 0; i < quotes.length; i++) {
        let price = 0;

        if (quotes[i] === null) {
          price = (quotes[i - 2] + quotes[i - 1]) / 2;
        } else {
          price = quotes[i];
        }

        prices.push(Math.round((price + Number.EPSILON) * 100) / 100);
      }

      setStockPrice(prices[prices.length - 1]);

      const dates = [];

      const days = [];
      const months = [];
      const years = [];

      if (currTimeRange.range === '1d') {
        for (let i = 0; i < timestamps.length; i++) {
          const hour = new Date(timestamps[i] * 1000)
            .toLocaleDateString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })
            .split(',')[1]
            .trim();

          dates.push(hour);
        }
      } else {
        for (let i = 0; i < timestamps.length; i++) {
          const date = new Date(timestamps[i] * 1000)
            .toLocaleDateString('en-GB')
            .split('/');

          days.push(Number(date[0]));
          months.push(Number(date[1]));
          years.push(Number(date[2]));

          dates.push([date[2], date[1], date[0]].join('-'));
        }
      }

      setTimestamps([days, months, years]);

      const chartData = [];

      for (let i = 0; i < prices.length; i++) {
        chartData.push({ date: dates[i], price: prices[i] });
      }

      setChartData(chartData);
      setIsLoading(false);
    };

    // fetchChart().catch(error => {
    //   setHttpError(true);
    // });
  }, [currStock, currTimeRange]);

  const selectOption = (option, type) => {
    if (type === 'Stock') {
      setCurrStock(prevCurrStock => ({
        ...prevCurrStock,
        name: option.name,
        symbol: option.symbol,
      }));
      setIsLoading(true);
      setChartData(null);
    } else {
      let interval = '1d';
      if (option === '1d') {
        interval = '15m';
      }
      setCurrTimeRange({ range: option, interval: interval });
      setChartData(null);
    }
  };

  let content = (
    <div className={classes.ChartZone}>
      <h1>{`${currStock.name} Inc`}</h1>
      <h2>{!isLoading ? `${stockPrice} USD` : `Price is loading`}</h2>
      <Chart
        data={chartData}
        stock={currStock.name}
        timeRange={currTimeRange.range}
        timestamps={timestamps}
      />
    </div>
  );

  if (httpError) {
    content = (
      <section className={classes.HttpError}>
        <p>This chart is not available</p>
      </section>
    );
  }

  return (
    <div className={classes.MarketContainer}>
      <div className={classes.LeftContainer}></div>
      {content}
      <div className={classes.InfoContainer}></div>
      <div className={classes.InfoZone}>
        <Dropdown
          title={'Stock'}
          options={['AAPL', 'AMZN', 'FB', 'GOOGL', 'NFLX', 'TSLA']}
          onSelectOption={selectOption}
        />
        <Dropdown
          title={'Range'}
          options={['1d', '5d', '1mo', '6mo', '1y', '5y']}
          onSelectOption={selectOption}
        />
      </div>
    </div>
  );
};

export default MarketChart;
