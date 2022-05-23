const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

function exhibition(hour) {
  if (hour === 'Monday') {
    return 'The zoo will be closed!';
  }
  return species
    .filter((specie) => specie.availability.includes(hour))
    .reduce((acc, curr) => [...acc, curr.name], []);
}

function officeHour(hour) {
  if (hour === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${hours[hour].open}am until ${hours[hour].close}pm`;
}

function allAnimalsAvaliability(availability) {
  const schedule = {};
  Object.keys(availability).forEach((hour) => {
    schedule[hour] = {
      officeHour: officeHour(hour),
      exhibition: exhibition(hour),
    };
  });
  return schedule;
}

function getSchedule(scheduleTarget) {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return species.filter((specie) => specie.name === scheduleTarget)[0].availability;
  } if (Object.keys(allAnimalsAvaliability(hours)).includes(scheduleTarget)) {
    return {
      [scheduleTarget]:
        allAnimalsAvaliability(hours)[scheduleTarget],
    };
  }
  return allAnimalsAvaliability(hours);
}

module.exports = getSchedule;
