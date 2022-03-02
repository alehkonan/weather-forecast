import { createSelector } from 'reselect';

export const filteredForecast = createSelector(
  (state) => state.forecast.currentForecast.hourly || [],
  (hourly) =>
    hourly.filter((forecast) => {
      const forecastHours = new Date(forecast.dt * 1000).getHours();
      const forecastDate = new Date(forecast.dt * 1000).getDate();
      const currentHours = new Date().getHours();
      const currentDate = new Date().getDate();
      return forecastHours > currentHours && forecastDate === currentDate;
    })
);
