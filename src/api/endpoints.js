const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export const COORDINATES = (city) =>
  `${API_URL}/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
export const HOURLY_FORECAST = (lat, long) =>
  `${API_URL}/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,daily,alerts&units=metric&appid=${API_KEY}`;
