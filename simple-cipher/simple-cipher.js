function Cipher(key){
  BASE = 'a'.charCodeAt(0);

  this.encode = function(input){
    return input.split('').map(function(char, idx) {
      return this.encode_char(char, idx);
    }, this).join('');
  }

  this.decode = function(input){
    return input.split('').map(function(char, idx) {
      return  this.encode_char(char, idx, true);
    }, this).join('');
  }

  this.encode_char = function(char, position, decode = false) {
    var value = char.charCodeAt(0) - BASE;
    var key = this.key.charCodeAt(position % this.key.length) - BASE;
    if (decode) {
      key = -key;
    }
    return String.fromCharCode(BASE + ((26 + value + key) % 26));
  }

  this.randomChar = function(){
    return String.fromCharCode(BASE + Math.floor(Math.random()*26));
  }

  if (key != null) {
    if ((key.match(/[^a-z]/)) || (key.length == 0)) {
      throw(new Error('Bad key'));
    }
    this.key = key;
  }
  else {
    this.key = '';
    for (var i=0; i < 20; i += 1) {
      this.key += this.randomChar();
    }
  }
}

module.exports = Cipher;
