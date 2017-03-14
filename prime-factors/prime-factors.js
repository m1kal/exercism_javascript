function PrimeFactors(){};

PrimeFactors.for = function(number) {
  factors = [];
  quotient = number;
  for (candidate=2;quotient>1;) {
    if (quotient % candidate == 0) {
      factors.push(candidate);
      quotient /= candidate;
    }
    else {
      candidate++;
    }
  }
  return factors;
}

module.exports = PrimeFactors;
