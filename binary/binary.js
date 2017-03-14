function Binary(value) {
  this.binary =  value.split('').reverse().join('');
  this.toDecimal = function(){
    if (this.binary.match(/[^01]/)) {
      return 0;
    }
    decimal = 0;
    for (idx = 0; idx < this.binary.length;idx++) {
      decimal += (this.binary[idx]=='1') ? Math.pow(2,idx) : 0;
    }
    return decimal;
  };
}

module.exports = Binary;
