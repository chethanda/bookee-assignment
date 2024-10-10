import { v4 as uuidv4 } from 'uuid';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const dayAfterTomorrow = new Date(today);
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

export const mockShifts = [
  {
    id: uuidv4(),
    area: 'Helsinki',
    booked: false,
    startTime: new Date(today.setHours(9, 0, 0, 0)).getTime(),
    endTime: new Date(today.setHours(11, 0, 0, 0)).getTime(),
  },
  {
    id: uuidv4(),
    area: 'Helsinki',
    booked: false,
    startTime: new Date(today.setHours(14, 0, 0, 0)).getTime(),
    endTime: new Date(today.setHours(16, 0, 0, 0)).getTime(),
  },
  {
    id: uuidv4(),
    area: 'Turku',
    booked: false,
    startTime: new Date(tomorrow.setHours(9, 0, 0, 0)).getTime(),
    endTime: new Date(tomorrow.setHours(11, 0, 0, 0)).getTime(),
  },
  {
    id: uuidv4(),
    area: 'Helsinki',
    booked: false,
    startTime: new Date(tomorrow.setHours(13, 30, 0, 0)).getTime(),
    endTime: new Date(tomorrow.setHours(15, 0, 0, 0)).getTime(),
  },
  {
    id: uuidv4(),
    area: 'Tampere',
    booked: false,
    startTime: new Date(dayAfterTomorrow.setHours(12, 0, 0, 0)).getTime(),
    endTime: new Date(dayAfterTomorrow.setHours(16, 0, 0, 0)).getTime(),
  },
];