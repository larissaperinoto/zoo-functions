const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const visitors = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      visitors.child += 1;
    } else if (entrant.age >= 50) {
      visitors.senior += 1;
    } else {
      visitors.adult += 1;
    }
  });
  return visitors;
}

function calculateEntry(entrants) {
  let total = 0;
  if (entrants === undefined || Object.keys(entrants).length === 0) return total;

  Object.keys(prices).forEach((price) => {
    Object.keys(countEntrants(entrants)).forEach((visitor) => {
      if (price === visitor) total += (countEntrants(entrants)[visitor] * prices[price]);
    });
  });
  return total;
}

module.exports = { calculateEntry, countEntrants };
