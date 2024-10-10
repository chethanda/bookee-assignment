import React from 'react';
import ShiftItem from './ShiftItem';
import { groupShiftsByDate, calculateTotalHoursForDay } from '../utils/dateUtils';

export default function MyShifts({ shifts, onCancelShift, onBookShift }) {
  const isHelsinki9to11 = (shift) => {
    const shiftStart = new Date(shift.startTime);
    const shiftEnd = new Date(shift.endTime);
    return shift.area === "Helsinki" && 
           shiftStart.getHours() === 9 && 
           shiftStart.getMinutes() === 0 &&
           shiftEnd.getHours() === 11 &&
           shiftEnd.getMinutes() === 0;
  };

  const relevantShifts = shifts.filter(shift => shift.booked || isHelsinki9to11(shift));
  const groupedShifts = groupShiftsByDate(relevantShifts);

  return (
    <div className="my-shifts">
      {Object.entries(groupedShifts).map(([date, dateShifts]) => (
        <div key={date} className="shift-group">
          <div className="date-header">
            <h3>
              {date}, {dateShifts.length} {dateShifts.length === 1 ? 'shift' : 'shifts'}, {calculateTotalHoursForDay(dateShifts)}
            </h3>
          </div>
          <div className="shift-list">
            {dateShifts.map(shift => (
              <ShiftItem
                key={shift.id}
                shift={shift}
                onCancelShift={onCancelShift}
                onBookShift={onBookShift}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}