export function getDateAMonthAgo(year: number) {
  const date = new Date();
  date.setFullYear(year);
  // Check if the month went to negative (less than 0)
  // If so, adjust the year accordingly
  // if (date.getMonth() < 0) {
  //   date.setFullYear(date.getFullYear() - 1);
  //   date.setMonth(12 + date.getMonth());
  // }
  return date;
}
