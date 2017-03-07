var BigInt = require('./big-integer');

function Grains() {
  this.square = function(index) {
    return this.power_of_2(index-1).toString();
  };
  this.total = function() {
    return this.power_of_2(64).subtract(1).toString();
  }
  this.power_of_2 = function(exponent) {
    return BigInt(2).pow(exponent);
  }
}

module.exports = Grains;
