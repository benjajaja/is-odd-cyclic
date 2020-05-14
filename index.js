module.exports = function(number) {
  if (number === 0) {
    return false;
  }
  var isEven = require("is-even-cyclic");
  var incr = number > 0 ? -1 : 1;
  return isEven(number + incr);
};
