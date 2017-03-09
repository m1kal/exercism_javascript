const DECIMAL = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
const ROMAN = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];

function toRoman(value){
  var temp = value;
  var output = '';
  for(var radix_idx=ROMAN.length-1; radix_idx>=0; radix_idx--) {
    while (temp >= DECIMAL[radix_idx]) {
      output += ROMAN[radix_idx];
      temp -= DECIMAL[radix_idx];
    }
  }
  return output;
}

module.exports = toRoman;
