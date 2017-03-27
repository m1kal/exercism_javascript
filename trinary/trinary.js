function Trinary(value) {
  this.value = value;

  this.toDecimal = _=>{
    if (this.value.match(/[^0-2]/)) {
      return 0;
    }
    return this.value.split('').reverse().reduce((number,digit,idx)=>{
      return number + Math.pow(3,idx) * Number(digit);
    },0);
  }
}

module.exports = Trinary;

