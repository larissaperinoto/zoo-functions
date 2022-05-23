const data = require('../data/zoo_data');

const { species } = data;

function animalUndefined(animal) {
  return species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}

function countAnimals(animal) {
  if (animal === undefined) {
    return animalUndefined(animal);
  }

  if (Object.keys(animal).length === 1) {
    return species.filter((specie) => specie.name === animal.specie)[0].residents.length;
  }

  if (Object.keys(animal).length === 2) {
    return species.filter((specie) => specie.name === animal.specie)[0]
      .residents.filter((resident) => resident.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
