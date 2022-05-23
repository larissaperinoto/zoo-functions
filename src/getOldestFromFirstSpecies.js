const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((employer) => employer.id === id).responsibleFor[0];
  const animalsResidents = species.filter((specie) => specie.id === animal)[0].residents;
  const oldestAnimal = animalsResidents.reduce((acc, curr) => {
    let old = acc;
    if (old.age < curr.age) old = curr;
    return old;
  });
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
