import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chartData: [],
  currStock: {
    name: 'Apple',
    symbol: 'AAPL',
  },
  currTimeRange: {
    range: '1mo',
    interval: '1d',
  },
  timestamps: [],
  stockPrice: null,
  isLoading: true,
  error: false,
};

const chartSlice = createSlice({
  name: 'chartReducer',
  initialState,
  reducers: {
    setChartData(state, action) {
      state.chartData = action.payload.chartData;
    },
    setCurrStock(state, action) {
      state.currStock = {
        name: action.payload.name,
        symbol: action.payload.symbol,
      };
    },
    setCurrTimeRange(state, action) {
      state.currTimeRange = {
        range: action.payload.range,
        interval: action.payload.interval,
      };
    },
    setTimestamps(state, action) {
      state.timestamps = action.payload.timestamps;
    },
    setStockPrice(state, action) {
      state.stockPrice = action.payload.price;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
    setError(state, action) {
      state.error = action.payload.error;
    },
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice;
