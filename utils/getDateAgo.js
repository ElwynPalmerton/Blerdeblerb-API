function getDateAgo(current, days) {
  let dateCopy = new Date(current);
  dateCopy.setDate(current.getDate() - days);
  return dateCopy;
}

function getHoursAgo(current, hours) {
  let dateCopy = new Date(current);
  dateCopy.setHours(current.getHours() - hours);
  return dateCopy;
}

function getMinutesAgo(current, minutes) {
  let dateCopy = new Date(current);
  dateCopy.setMinutes(current.getMinutes() - minutes);
  return dateCopy;
}

module.exports = { getDateAgo, getHoursAgo, getMinutesAgo };
