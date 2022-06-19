import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.openweathermap.org/',
  }),
  tagTypes: ['Weather'],
  endpoints: builder => ({
    getCityWeather: builder.query({
      query: city =>
        `data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`,
    }),
    getCityForecast: builder.query({
      query: city =>
        `data/2.5/forecast?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetCityWeatherQuery, useGetCityForecastQuery } = weatherApi;
