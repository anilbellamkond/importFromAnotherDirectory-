var getpeopleNames = require("../country/state/city/index.js");
var getFirstNames = require("../utilities/utils/index.js");

var getPeopleInCity = (getpeopleNames) => {
  return getFirstNames(getpeopleNames);
};
module.exports = getPeopleInCity(getpeopleNames);
console.log(getPeopleInCity(getpeopleNames));
