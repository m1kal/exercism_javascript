function PerfectNumbers(){

  this.classify = function(number) {
    if ((number < 1) || (number != Math.floor(number))) {
      return 'Classification is only possible for natural numbers.';
    }
    factors = this.factors(number);
    sum = factors.reduce(function(sum,factor) {
      return sum + factor;
    },0);
    if (sum > number) {return 'abundant';}
    if (sum < number) {return 'deficient';}
    return 'perfect';
  }

  this.factors = function(number) {
    factors = [];
    for (var i=1;i<number; i++) {
      if (number % i == 0) {
        factors.push(i);
      }
    }
    return factors;
  }
}

module.exports = PerfectNumbers;

