export function getDefaultFromAndToDate() {
  const from = new Date();
  const to = new Date();
  // the api endpoint is giving me the data between these years only.
  from.setFullYear(1952);
  to.setFullYear(1972);

  return {
    // we need from and to value in "YYYY-MM-DD" format
    from: from.toISOString().substring(0, 10),
    to: to.toISOString().substring(0, 10),
  };
}
