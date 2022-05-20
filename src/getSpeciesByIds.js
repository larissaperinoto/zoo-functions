const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const researchSpecie = [];
  ids.forEach((id) => {
    data.species.forEach((objeto) => {
      if (objeto.id === id) {
        researchSpecie.push(objeto);
      }
    });
  });
  return researchSpecie;
}

module.exports = getSpeciesByIds;
