import './App.css';
import React from 'react';
import Container from './Components/Layout/Container';
import { WeatherProvider } from './Components/Context/WeatherContext';
import { LocationProvider } from './Components/Context/LocationContext';
import Forecasts from './Components/Forecasts';
import Location from './Components/Location';

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <Container>
          <h1>Weather Forecast</h1>
          <Location/>
          <Forecasts />
        </Container>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
