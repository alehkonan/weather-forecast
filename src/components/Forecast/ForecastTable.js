import React from 'react';
import { Table } from 'react-bootstrap';
import { forecastBodyRows, forecastHeaderCols } from './utils';

export const ForecastTable = ({ hourlyForecast }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Hour</th>
          {forecastHeaderCols(hourlyForecast).map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {forecastBodyRows(hourlyForecast).map(({ name, values }) => (
          <tr key={name}>
            <td>{name}</td>
            {values.map((value, index) => {
              const content = typeof value === 'object' ? value[0].main : value;
              return <td key={index}>{content}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
