const data = require('../data/zoo_data');

const { prices } = data;

const visitors = {
  adult: 0,
  child: 0,
  senior: 0,
};

function countEntrants(entrants) {
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
  const visitants = [countEntrants(entrants)];
  let total = 0;
  Object.keys(prices).forEach((price) => {
    Object.keys(visitants[0]).forEach((visitor) => {
      if (price === visitor) {
        const value = visitors[visitor] * prices[price];
        total += value;
      }
    });
  });
  return total;
}

module.exports = { calculateEntry, countEntrants };
