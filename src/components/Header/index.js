import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { CityDropdown } from '../../features/changeCountry/CityDropdown';
import { CountryDropdown } from '../../features/changeCountry/CountryDropdown';

export const Header = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>Weather forecast</Navbar.Brand>
        <Navbar.Collapse>
          <CountryDropdown />
          <CityDropdown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
