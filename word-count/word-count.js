function Words() {
  this.count = function(words_in) {
    var words = words_in.replace(/[\:\!\@\&\$\^\%\.¡\?¿]/g,"").replace(/\W\'/," ").replace(/\'\W/," ").replace(/[\n\t]/g," ").replace(/^\s+/,"").replace(/\s+$/,"").toLowerCase().split(/[ ,]+/);
    var word_count = {};
    for (var iter = 0; iter< words.length; iter++) {
      word_count[words[iter]] = (word_count[words[iter]] | 0) + 1 ;
    }
    return word_count
  }

};

module.exports = Words;
