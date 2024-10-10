import React from 'react';

const cities = ['All', 'Helsinki', 'Tampere', 'Turku'];

export default function CityFilter({ selectedCity, onCityChange }) {
  return (
    <div className="city-filter">
      {cities.map(city => (
        <button
          key={city}
          className={`filter-button ${selectedCity === city ? 'active' : ''}`}
          onClick={() => onCityChange(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
}