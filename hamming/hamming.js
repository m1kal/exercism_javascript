function Hamming() {
  this.compute = function(first, second) {
    var diff = 0;
    if (first.length != second.length) {
      throw new Error("DNA strands must be of equal length.");
    }
    for (var iter = 0; iter < first.length;iter++) {
      diff += (first[iter] == second[iter]) ? 0 : 1
    }
    return diff;
  };
};

module.exports = Hamming
