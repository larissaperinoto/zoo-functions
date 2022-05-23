const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return employees
    .filter((employer) =>
      employer.firstName === employeeName || employer.lastName === employeeName)[0];
}

module.exports = getEmployeeByName;
