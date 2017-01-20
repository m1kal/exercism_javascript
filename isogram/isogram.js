function Isogram(string) {
  this.string = string.toLowerCase().replace(/[- ']/g,"");
  this.isIsogram = function() {
    var occurences = {};
    for (var idx = 0; idx<this.string.length; idx++) {
      if (occurences[this.string[idx]] === 1) {
        return false;
      }
      occurences[this.string[idx]] = 1
    }
    return true;
  };
}

module.exports = Isogram;
