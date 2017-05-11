function Crypto(plaintext) {
  this.plaintext = plaintext.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

  this.size = _ => {return Math.ceil(Math.sqrt(this.plaintext.length));};
  this.normalizePlaintext = _ => {return this.plaintext;};

  this.plaintextSegments = _ => {
    var re = new RegExp('(.{' + this.size() + '})','g');
    return this.plaintext.replace(re, '$1 ').trim().split(' ');
  };

  this.ciphertext = _ => {
    return this.plaintextSegments().reduce((accum, _, col_idx, array) => {
      return accum + array.reduce((row_buffer,row) => {
        return row_buffer + (row[col_idx] || '');
      },'');
    },'');
  };

}

module.exports = Crypto;
