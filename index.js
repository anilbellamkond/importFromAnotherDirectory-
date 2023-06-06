var list = require("..../country/state/city/index.js");
var getFirstNames = require(".../utilities/utils/index.js");

var getPeopleInCity = (a) => {
  return getFirstNames(list);
};
module.exports = getPeopleInCity(list);
console.log(getPeopleInCity(list));
