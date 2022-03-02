import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeCity } from './countrySlice';

export const CityDropdown = () => {
  const dispatch = useDispatch();
  const { currentCountry, currentCity } = useSelector((state) => state.country);

  return (
    <Dropdown
      className="m-1"
      onSelect={(eventKey) => {
        dispatch(changeCity(eventKey));
      }}
    >
      <Dropdown.Toggle style={{ width: '100px' }}>
        {currentCity}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {currentCountry.cities?.map((city) => (
          <Dropdown.Item key={city.id} eventKey={city.name}>
            {city.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
