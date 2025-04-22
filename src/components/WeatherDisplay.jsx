import React from 'react';

function WeatherDisplay({ weather }) {
  return (
    <div className="flex items-center text-gray-600">
      <span className="text-yellow-500">☀️</span>
      <span className="ml-1">{weather.temp}°C</span>
    </div>
  );
}

export default WeatherDisplay;