import React, { useState } from 'react';
import { formatTimeRange } from '../utils/dateUtils';
import spinnerGreen from '../assets/spinner_green.svg';
import spinnerRed from '../assets/spinner_red.svg';

export default function ShiftItem({ shift, onBookShift, onCancelShift }) {
  const [isLoading, setIsLoading] = useState(false);

  const isHelsinki9to11 = () => {
    const shiftStart = new Date(shift.startTime);
    const shiftEnd = new Date(shift.endTime);
    return shift.area === "Helsinki" && 
           shiftStart.getHours() === 9 && 
           shiftStart.getMinutes() === 0 &&
           shiftEnd.getHours() === 11 &&
           shiftEnd.getMinutes() === 0;
  };

  const handleAction = async () => {
    if (isHelsinki9to11()) return; 

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    
    if (shift.booked) {
      onCancelShift(shift.id);
    } else {
      onBookShift(shift.id);
    }
    setIsLoading(false);
  };

  return (
    <div className={`shift-item ${shift.booked ? 'booked' : ''}`}>
      <div className="shift-info">
        <span className="shift-time">{formatTimeRange(shift.startTime, shift.endTime)}</span>
        <span className="shift-area">{shift.area}</span>
      </div>
      {isLoading ? (
        <img
          src={shift.booked ? spinnerRed : spinnerGreen}
          alt="Loading"
          className="spinner"
        />
      ) : (
        <button
          className={`action-button ${shift.booked ? 'cancel' : 'book'}`}
          onClick={handleAction}
          disabled={isHelsinki9to11() && shift.booked}
        >
          {shift.booked || isHelsinki9to11() ? 'Cancel' : 'Book'}
        </button>
      )}
    </div>
  );
}