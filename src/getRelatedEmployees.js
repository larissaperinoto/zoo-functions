const data = require('../data/zoo_data');

function isManager(id) {
  for (const objeto of data.employees) {
    if (objeto.id === id && id != '4b40a139-d4dc-4f09-822d-ec25e819a5ad') {
      return true
    }
  }
  return false;
}

function getRelatedEmployees(managerId) {
  let responsibility = [];
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  for (const employer of data.employees) {
    if (employer.managers.includes(managerId)) {
      responsibility.push(`${employer.firstName} ${employer.lastName}`);
    }
  }
  return responsibility;
}

console.log(getRelatedEmployees("9e7d4524-363c-416a-8759-8aa7e50c0992"))

module.exports = { isManager, getRelatedEmployees };
