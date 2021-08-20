import { configureStore } from '@reduxjs/toolkit';

import chartReducer from './chartData-slice';

const store = configureStore({
  reducer: { chart: chartReducer.reducer },
});

export default store;
