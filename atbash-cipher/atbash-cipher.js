function atbash(){}

atbash.encode = function(plaintext){
  return plaintext.prepare_plaintext()
                  .map(char => char.atbash_char())
                  .process_ciphertext();
}

String.prototype.atbash_char = function(){
  return (this.match(/[a-z]/)) ? this.atbash_letter() : this;
}

String.prototype.atbash_letter = function(){
  return String.fromCharCode('a'.charCodeAt(0)
                              + 'z'.charCodeAt(0)
                              - this.charCodeAt(0));
}

String.prototype.prepare_plaintext = function(){
  return this.toLowerCase().replace(/[\s\,\.]/g,'').split('');
}

Array.prototype.process_ciphertext = function(){
  return this.join('').replace(/(.{5})/g,'$1 ').trim();
}

module.exports = atbash;
