import React, { useState } from 'react';
import ShiftItem from './ShiftItem';
import CityFilter from './CityFilter';
import { groupShiftsByDate } from '../utils/dateUtils';

export default function AvailableShifts({ shifts, onBookShift, onCancelShift }) {
  const [selectedCity, setSelectedCity] = useState('All');
  const filteredShifts = selectedCity === 'All' 
    ? shifts 
    : shifts.filter(shift => shift.area === selectedCity);
  const groupedShifts = groupShiftsByDate(filteredShifts);

  const getCityShiftCount = (city) => {
    return shifts.filter(shift => shift.area === city).length;
  };

  return (
    <div className="available-shifts">
      <CityFilter 
        selectedCity={selectedCity} 
        onCityChange={setSelectedCity}
        cityShiftCounts={{
          Helsinki: getCityShiftCount('Helsinki'),
          Turku: getCityShiftCount('Turku'),
          Tampere: getCityShiftCount('Tampere')
        }}
      />
      {Object.entries(groupedShifts).map(([date, dateShifts]) => (
        <div key={date} className="shift-group">
          <h3>{date}</h3>
          <div className="shift-list">
            {dateShifts.map(shift => (
              <ShiftItem
                key={shift.id}
                shift={shift}
                onBookShift={onBookShift}
                onCancelShift={onCancelShift}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}