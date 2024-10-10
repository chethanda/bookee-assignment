import React, { useState } from "react";
import Header from "./components/Header";
import MyShifts from "./components/MyShifts";
import AvailableShifts from "./components/AvailableShifts";
import { mockShifts } from "./utils/mockData";

export default function App() {
  const [activeView, setActiveView] = useState("myShifts");
  const [shifts, setShifts] = useState(mockShifts);

  const handleBookShift = (shiftId) => {
    setShifts(
      shifts.map((shift) =>
        shift.id === shiftId ? { ...shift, booked: true } : shift
      )
    );
  };

  const handleCancelShift = (shiftId) => {
    setShifts(
      shifts.map((shift) =>
        shift.id === shiftId ? { ...shift, booked: false } : shift
      )
    );
  };

  return (
    <div className="app">
      <Header activeView={activeView} setActiveView={setActiveView} />
      {activeView === "myShifts" ? (
        <MyShifts
          shifts={shifts}
          onCancelShift={handleCancelShift}
          onBookShift={handleBookShift}
        />
      ) : (
        <AvailableShifts
          shifts={shifts}
          onBookShift={handleBookShift}
          onCancelShift={handleCancelShift}
        />
      )}
    </div>
  );
}