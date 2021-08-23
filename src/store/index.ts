import { configureStore } from '@reduxjs/toolkit';

import chartReducer from './chartData-slice';

const store = configureStore({
  reducer: { chart: chartReducer.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
