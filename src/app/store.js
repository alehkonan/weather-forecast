import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from '../features/changeForecast/forecastSlice';
import countryReducer from '../features/changeCountry/countrySlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
    forecast: forecastReducer,
  },
});
