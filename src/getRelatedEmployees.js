const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employer) =>
    employer.id === id && id !== '4b40a139-d4dc-4f09-822d-ec25e819a5ad');
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees
    .filter((employer) => employer.managers.includes(managerId))
    .reduce((acc, curr) => acc.concat(`${curr.firstName} ${curr.lastName}`), []);
}

module.exports = { isManager, getRelatedEmployees };
