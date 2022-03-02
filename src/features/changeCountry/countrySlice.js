import { createSlice } from '@reduxjs/toolkit';
import { countries } from '../../data/countries';

const [firstCountry] = countries;

const initialState = {
  currentCountry: firstCountry || {},
  currentCity: firstCountry.cities ? firstCountry.cities[0]?.name : 'no cities',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    changeCountry: (state, action) => {
      state.currentCountry = action.payload;
    },
    changeCity: (state, action) => {
      state.currentCity = action.payload;
    },
  },
});

export const { changeCountry, changeCity } = countrySlice.actions;

export default countrySlice.reducer;
