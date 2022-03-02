import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { COORDINATES, HOURLY_FORECAST } from '../../api/endpoints';
import axios from 'axios';

const initialState = {
  hourlyForecast: [],
  cache: [],
  isLoading: false,
  error: null,
};

export const getForecast = createAsyncThunk(
  'forecast/fetchForecast',
  async (city, { rejectWithValue }) => {
    try {
      const {
        data: [coordinates],
        error: coordinatesError,
      } = await axios.get(COORDINATES(city));
      if (coordinatesError) rejectWithValue(coordinatesError);
      const { lat, lon } = coordinates;
      const { data: forecast, error: forecastError } = await axios.get(
        HOURLY_FORECAST(lat, lon)
      );
      if (forecastError) rejectWithValue(forecastError);
      return forecast.hourly;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getForecast.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getForecast.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getForecast.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hourlyForecast = action.payload;
        state.cache = [...state.cache, action.payload];
      });
  },
});

export default forecastSlice.reducer;
