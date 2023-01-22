var countryData = require('./data.json');

function generateCountryArray(countrySingleData) {
  return countrySingleData.name;
}

const countryArray = countryData.map(generateCountryArray);

module.exports = {
  all: countryData,
  countryArray: countryArray,
};
