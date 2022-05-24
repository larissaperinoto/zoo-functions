const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

function allAnimalsLocation() {
  const result = {};
  locations.forEach((location) => {
    result[location] = species
      .filter((animal) => location === animal.location)
      .reduce((acc, curr) => [...acc, curr.name], []);
  });
  return result;
}

function allAnimalsLocationWithName() {
  const result = {};
  locations.forEach((location) => {
    result[location] = species
      .filter((specie) => location === specie.location)
      .map((animal, index) => ({
        [animal.name]: animal.residents.map((resident) => resident.name),
      }));
  });
  return result;
}

function allAnimalsLocationWithNameOrdened() {
  const result = {};
  locations.forEach((location) => {
    result[location] = species
      .filter((specie) => location === specie.location)
      .map((animal, index) => ({
        [animal.name]: animal.residents.map((resident) => resident.name).sort(),
      }));
  });
  return result;
}

function allAnimalsLocationWithNameByGender(gender) {
  const result = {};
  locations.forEach((location) => {
    result[location] = species
      .filter((specie) => location === specie.location)
      .map((animal) => ({
        [animal.name]: animal.residents.filter((residents) => residents.sex === gender)
          .map((female) => female.name),
      }));
  });
  return result;
}

function allAnimalsLocationWithNameByGenderOrdened(gender) {
  const result = {};
  locations.forEach((location) => {
    result[location] = species
      .filter((specie) => location === specie.location)
      .map((animal) => ({
        [animal.name]: (animal.residents.filter((residents) => residents.sex === gender)
          .map((female) => female.name))
          .sort(),
      }));
  });
  return result;
}

function optionsVerifyNamesGenderOrdened(options) {
  if (options.includeNames === true && options.sex !== undefined && options.sorted === true) {
    return allAnimalsLocationWithNameByGenderOrdened(options.sex);
  }
}

function optionsVerifyNamesGender(options) {
  if (options.includeNames === true && options.sex !== undefined && !options.sorted) {
    return allAnimalsLocationWithNameByGender(options.sex);
  }
  return optionsVerifyNamesGenderOrdened(options);
}

function optionsVerifyNamesOrdened(options) {
  if (options.includeNames === true && !options.sex && !options.sorted) {
    return allAnimalsLocationWithName();
  }
  return optionsVerifyNamesGender(options);
}

function optionsVerifyNames(options) {
  if (options.includeNames === true && !options.sex && options.sorted === true) {
    return allAnimalsLocationWithNameOrdened();
  }
  return optionsVerifyNamesOrdened(options);
}

function getAnimalMap(options) {
  if (!options || (options.sex !== undefined && !options.includeNames)) {
    return allAnimalsLocation();
  }
  return optionsVerifyNames(options);
}

module.exports = getAnimalMap;
