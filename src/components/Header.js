import React from 'react';

export default function Header({ activeView, setActiveView }) {
  return (
    <header className="header">
      <nav>
        <button
          className={`nav-button ${activeView === 'myShifts' ? 'active' : ''}`}
          onClick={() => setActiveView('myShifts')}
        >
          My shifts
        </button>
        <button
          className={`nav-button ${activeView === 'availableShifts' ? 'active' : ''}`}
          onClick={() => setActiveView('availableShifts')}
        >
          Available shifts
        </button>
      </nav>
    </header>
  );
}