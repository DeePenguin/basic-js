const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (!date) return 'Unable to determine the time of year!';
  if (!Date.parse(date)) throw Error("Invalid date!");
  if (Object.getOwnPropertyNames(date).length !== 0) throw Error("Invalid date!");
  const month = date.getMonth();
  if (month > 10 || month < 2) return 'winter';
  else if (month < 5) return 'spring';
  else if (month < 8) return 'summer';
  else return 'autumn';
}

module.exports = {
  getSeason
};
