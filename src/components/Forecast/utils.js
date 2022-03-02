export const forecastHeaderCols = (forecastArr) =>
  forecastArr.map((record) => new Date(record.dt * 1000).getHours());

export const forecastBodyRows = (forecastArr) => {
  const forecastObj = forecastArr.reduce(
    (prev, curr) => {
      return {
        temp: {
          ...prev.temp,
          values: [...prev.temp.values, curr.temp],
        },
        feels_like: {
          ...prev.feels_like,
          values: [...prev.feels_like.values, curr.feels_like],
        },
        pressure: {
          ...prev.pressure,
          values: [...prev.pressure.values, curr.pressure],
        },
        humidity: {
          ...prev.humidity,
          values: [...prev.humidity.values, curr.humidity],
        },
        dew_point: {
          ...prev.dew_point,
          values: [...prev.dew_point.values, curr.dew_point],
        },
        uvi: {
          ...prev.uvi,
          values: [...prev.uvi.values, curr.uvi],
        },
        clouds: {
          ...prev.clouds,
          values: [...prev.clouds.values, curr.clouds],
        },
        visibility: {
          ...prev.visibility,
          values: [...prev.visibility.values, curr.visibility],
        },
        wind_speed: {
          ...prev.wind_speed,
          values: [...prev.wind_speed.values, curr.wind_speed],
        },
        wind_deg: {
          ...prev.wind_deg,
          values: [...prev.wind_deg.values, curr.wind_deg],
        },
        wind_gust: {
          ...prev.wind_gust,
          values: [...prev.wind_gust.values, curr.wind_gust],
        },
        weather: {
          ...prev.weather,
          values: [...prev.weather.values, curr.weather],
        },
        pop: {
          ...prev.pop,
          values: [...prev.pop.values, curr.pop],
        },
      };
    },
    {
      temp: {
        name: 'Temperature',
        values: [],
      },
      feels_like: {
        name: 'Feels like',
        values: [],
      },
      pressure: {
        name: 'Pressure',
        values: [],
      },
      humidity: {
        name: 'Humidity',
        values: [],
      },
      dew_point: {
        name: 'Dew point',
        values: [],
      },
      uvi: {
        name: 'UVI',
        values: [],
      },
      clouds: {
        name: 'Clouds',
        values: [],
      },
      visibility: {
        name: 'Visibility',
        values: [],
      },
      wind_speed: {
        name: 'Wind speed',
        values: [],
      },
      wind_deg: {
        name: 'Wind degrees',
        values: [],
      },
      wind_gust: {
        name: 'Wind gust',
        values: [],
      },
      weather: {
        name: 'Weather',
        values: [],
      },
      pop: {
        name: 'Pop',
        values: [],
      },
    }
  );
  return Object.values(forecastObj);
};
