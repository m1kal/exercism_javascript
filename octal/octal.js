function Octal(input){
  this.octal = input;

  this.toDecimal = function(){
    var decimal = 0;
    for (var pos = 0; pos < this.octal.length; pos++) {
      decimal += Math.pow(8,pos) * Number(this.octal[this.octal.length - pos - 1]);
    }
    return this.octal.match(/[^0-7]/) ? 0 : decimal;
  }
}

module.exports = Octal;
