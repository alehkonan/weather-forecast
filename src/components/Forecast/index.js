import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filteredForecast } from '../../features/changeForecast/forecastSelector';
import { getForecast } from '../../features/changeForecast/forecastSlice';
import { ForecastTable } from './ForecastTable';

export const Forecast = () => {
  const dispatch = useDispatch();
  const { currentCity } = useSelector((state) => state.country);
  // const { cache } = useSelector((state) => state.forecast);
  const hourlyForecast = useSelector(filteredForecast);

  useEffect(() => {
    dispatch(getForecast(currentCity));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCity]);

  return (
    <Container fluid>
      <ForecastTable hourlyForecast={hourlyForecast} />
    </Container>
  );
};
