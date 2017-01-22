const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
function Pangram(phrase) {
  this.phrase = phrase.toLowerCase()
  this.isPangram = function() {
    for (var idx = 0; idx < ALPHABET.length; idx++) {
      if (this.phrase.match(ALPHABET[idx]) === null){
        return false;
      }
    }
    return true;
  }
}

module.exports = Pangram;
