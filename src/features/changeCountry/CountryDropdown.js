import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { countries } from '../../data/countries';
import { changeCity, changeCountry } from './countrySlice';

export const CountryDropdown = () => {
  const dispatch = useDispatch();
  const { currentCountry } = useSelector((state) => state.country);

  return (
    <Dropdown
      onSelect={(eventKey) => {
        const country =
          countries.find((country) => country.name === eventKey) || {};
        dispatch(changeCountry(country));
        dispatch(changeCity(country.cities[0].name));
      }}
    >
      <Dropdown.Toggle style={{ width: '100px' }}>
        {currentCountry.name || 'no countries'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {countries.map((country) => (
          <Dropdown.Item key={country.id} eventKey={country.name}>
            {country.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
