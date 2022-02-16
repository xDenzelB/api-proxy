import React from 'react';

export default function WeatherList({ weather }) {

  function parseTime(dt) {
    return new Date(dt * 1000).toUTCString();
  }
  return (
    <div>
      {weather.map((forecast, i) =>  
        <div className='weather-item' key={forecast.dt + i}> 
          <p>Date: {parseTime(forecast.dt)}</p>
          <p>Clouds: {forecast.clouds}</p>
          <p>Humidity: {forecast.humidity}</p>
          <p>{forecast.weather[0].description}</p>
        </div>
      )}
    </div>
  );}