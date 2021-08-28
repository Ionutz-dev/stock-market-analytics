import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface stateConfiguration {
  chartData: { date: string; price: number }[] | [];
  currStock: { name: string; symbol: string };
  currTimeRange: { range: string; interval: string };
  timestamps: number[][];
  stockPrice: number | null;
  isLoading: boolean;
  error: boolean;
}

const initialState: stateConfiguration = {
  chartData: [],
  currStock: {
    name: 'Apple',
    symbol: 'AAPL',
  },
  currTimeRange: {
    range: '1m',
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
    setChartData(
      state,
      action: PayloadAction<{
        chartData: { date: string; price: number }[] | [];
      }>
    ) {
      state.chartData = action.payload.chartData;
    },
    setCurrStock(
      state,
      action: PayloadAction<{ name: string; symbol: string }>
    ) {
      state.currStock = {
        name: action.payload.name,
        symbol: action.payload.symbol,
      };
    },
    setCurrTimeRange(
      state,
      action: PayloadAction<{ range: string; interval: string }>
    ) {
      state.currTimeRange = {
        range: action.payload.range,
        interval: action.payload.interval,
      };
    },
    setTimestamps(state, action: PayloadAction<{ timestamps: number[][] }>) {
      state.timestamps = action.payload.timestamps;
    },
    setStockPrice(state, action: PayloadAction<{ price: number }>) {
      state.stockPrice = action.payload.price;
    },
    setIsLoading(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
    },
    setError(state, action: PayloadAction<{ error: boolean }>) {
      state.error = action.payload.error;
    },
  },
});

export const chartActions = chartSlice.actions;

export default chartSlice;
