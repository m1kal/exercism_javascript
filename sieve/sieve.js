function Sieve(limit) {
  this.limit = limit;

  this.findPrimes = function() {
    numbers = this.prepare_table(this.limit);

    for (var idx=2;idx<=Math.sqrt(this.limit);idx++) {
      for (var n=2;n<=this.limit/idx;n++){
        numbers[n*idx] = false;
      }
    }

    return Object.keys(numbers)
      .filter(val=>{return numbers[val];},this)
      .map(val=>{return Number(val);});
  }

  this.prepare_table = (limit) => {
    var table = {};
    for (var idx=2;idx<=limit;idx++) {
      table[idx] = true;
    }
    return table;
  }

  this.primes = this.findPrimes();
}

module.exports = Sieve;

