export function getDefaultFromAndToDate() {
  const from = new Date();
  const to = new Date();
  // for most of the stations the data is starting from '1952'.
  from.setFullYear(1952);
  return {
    // we need from and to values in "YYYY-MM-DD" format
    from: from.toISOString().substring(0, 10),
    to: to.toISOString().substring(0, 10),
  };
}
