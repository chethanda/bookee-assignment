import React from 'react';
import ShiftItem from './ShiftItem';
import { formatDate } from '../utils/dateUtils';

export default function ShiftList({ date, shifts, onBookShift, onCancelShift }) {
  const formattedDate = formatDate(shifts[0].startTime);

  return (
    <div className="shift-list">
      <h3>{formattedDate}</h3>
      {shifts.map(shift => (
        <ShiftItem
          key={shift.id}
          shift={shift}
          onBookShift={onBookShift}
          onCancelShift={onCancelShift}
        />
      ))}
    </div>
  );
}