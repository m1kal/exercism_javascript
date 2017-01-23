function Anagram(word) {
  this.base_word = word.toLowerCase();
  this.matches = function (){
    var word_list = []
    for (var idx=0; idx<arguments.length; idx++){
      if (typeof arguments[idx] === "string") {
        word_list.push(arguments[idx]);
      }
      else {
        word_list = arguments[idx]
      }
    }
    matched = [];
    for (var idx=0;idx<word_list.length;idx++) {
      if ((this.contains(this.base_word,word_list[idx].toLowerCase())) &&
        (this.contains(word_list[idx].toLowerCase(),this.base_word))) {
          matched.push(word_list[idx])
      }
    }
    return matched;
  }
  this.contains = function(first, second){
    if ((first.length != second.length) || (first == second)){
      return false;
    }
    var tmp = second;
    for(var idx=0;idx<first.length;idx++){
      tmp = tmp.replace(first[idx],"");
    }
    return (tmp.length === 0);
  }
}

module.exports = Anagram;
