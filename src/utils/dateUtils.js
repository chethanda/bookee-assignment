export function groupShiftsByDate(shifts) {
    return shifts.reduce((acc, shift) => {
      const date = formatDate(new Date(shift.startTime));
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(shift);
      return acc;
    }, {});
  }
  
  export function formatDate(date) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }
  }
  
  export function formatTimeRange(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    return `${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')}-${end.getHours().toString().padStart(2, '0')}:${end.getMinutes().toString().padStart(2, '0')}`;
  }
  
  export function calculateTotalHoursForDay(shifts) {
    const totalMinutes = shifts.reduce((acc, shift) => {
      const duration = (shift.endTime - shift.startTime) / (1000 * 60);
      return acc + duration;
    }, 0);
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);
    
    return `${hours} h ${minutes} min`;
  }