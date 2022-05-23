const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function foundEmployer(objeto) {
  return employees.filter((employer) =>
    employer.firstName === objeto.name
    || employer.lastName === objeto.name
    || employer.id === objeto.id)[0];
}

function foundAnimalLocation(array) {
  const animalsLocationArray = [];
  const animalLocation = species.filter((specie) => array.includes(specie.id));
  animalLocation.forEach((animal) => animalsLocationArray.push(animal.location));
  return animalsLocationArray;
}

function foundAnimalName(array) {
  const animalNameArray = [];
  const animalName = species.filter((specie) => array.includes(specie.id));
  animalName.forEach((animal) => animalNameArray.push(animal.name));
  return animalNameArray;
}

function individualReport(array) {
  return {
    id: array.id,
    fullName: `${array.firstName} ${array.lastName}`,
    species: foundAnimalName(array.responsibleFor),
    locations: foundAnimalLocation(array.responsibleFor),
  };
}

function generalReport() {
  const report = [];
  employees.forEach((employer) => report.push(individualReport(employer)));
  return report;
}

function getEmployeesCoverage(objeto) {
  if (objeto === undefined) {
    return generalReport();
  }
  const employerData = foundEmployer(objeto);
  if (employerData !== undefined) {
    return individualReport(employerData);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
