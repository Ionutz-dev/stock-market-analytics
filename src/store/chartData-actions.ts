import axios from 'axios';
import { AnyAction } from 'redux';
import { RootState } from './index';
import { ThunkAction } from 'redux-thunk';

import { chartActions } from './chartData-slice';

export const fetchChartData =
  (fetchInfo: {
    currStock: { name: string; symbol: string };
    currTimeRange: { range: string; interval: string };
  }): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    const fetchData = async () => {
      const { currStock, currTimeRange } = fetchInfo;

      const response = await axios.request({
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
      });

      if (response.statusText !== 'OK') {
        throw new Error("Chart data couldn' t be fetched");
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

      const chartData = [];

      for (let i = 0; i < prices.length; i++) {
        chartData.push({ date: dates[i], price: prices[i] });
      }

      return {
        stockPrice: prices[prices.length - 1],
        chartData: chartData,
        timeData: [days, months, years],
      };
    };

    try {
      const data = await fetchData();

      dispatch(
        chartActions.setChartData({
          chartData: data.chartData,
        })
      );
      dispatch(
        chartActions.setTimestamps({
          timestamps: data.timeData,
        })
      );
      dispatch(
        chartActions.setStockPrice({
          price: data.stockPrice,
        })
      );
      dispatch(
        chartActions.setIsLoading({
          isLoading: false,
        })
      );
    } catch (error) {
      dispatch(
        chartActions.setError({
          error: true,
        })
      );
    }
  };

export const changeCurrStock = (stockData: {
  stockName: string;
  stockSymbol: string;
}): ThunkAction<void, RootState, unknown, AnyAction> => {
  return dispatch => {
    dispatch(
      chartActions.setCurrStock({
        name: stockData.stockName,
        symbol: stockData.stockSymbol,
      })
    );
    dispatch(
      chartActions.setChartData({
        chartData: [],
      })
    );
    dispatch(
      chartActions.setIsLoading({
        isLoading: true,
      })
    );
  };
};

export const changeCurrRange = (timeData: {
  range: string;
  interval: string;
}): ThunkAction<void, RootState, unknown, AnyAction> => {
  return dispatch => {
    dispatch(
      chartActions.setCurrTimeRange({
        range: timeData.range,
        interval: timeData.interval,
      })
    );
    dispatch(
      chartActions.setChartData({
        chartData: [],
      })
    );
  };
};
