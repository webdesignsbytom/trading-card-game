const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const generateCalendarData = () => {
  const now = new Date();
  const daysInMonth = getDaysInMonth(now.getMonth(), now.getFullYear());

  return Array.from({ length: daysInMonth }, (_, index) => ({
    id: index + 1,
    collected: false,
  }));
};

export const calendarDataArray = generateCalendarData();